"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsComponent = void 0;
var core_1 = require("@angular/core");
var list_service_1 = require("src/app/shared/services/list.service");
var dialog_1 = require("@angular/material/dialog");
var delete_dialog_component_1 = require("src/app/routes/lists/delete-dialog/delete-dialog.component");
var snack_bar_1 = require("@angular/material/snack-bar");
var auth_service_1 = require("../../shared/services/auth.service");
var angular_jwt_1 = require("@auth0/angular-jwt");
var helper = new angular_jwt_1.JwtHelperService();
var ListsComponent = /** @class */ (function () {
    function ListsComponent(authSvc, listSvc, dialog, snackBar) {
        this.authSvc = authSvc;
        this.listSvc = listSvc;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.lists = [];
        this.userId = JSON.parse(localStorage.getItem("user")).userId;
        this.loading = true;
    }
    ListsComponent.prototype.getLists = function () {
        var _this = this;
        this.loading = true;
        this.listSvc.getLists(this.userId)
            .subscribe(function (lists) {
            _this.loading = false;
            _this.lists = lists;
        });
    };
    ListsComponent.prototype.addNewList = function (listTitle) {
        var _this = this;
        this.listSvc.sendList(this.userId, listTitle).subscribe(function (list) {
            _this.getLists();
            _this.openSnackBar('A list has been added');
        });
    };
    ListsComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 3000
        });
    };
    ListsComponent.prototype.deleteList = function (id) {
        var _this = this;
        this.listSvc.deleteList(id).subscribe(function () {
            _this.openSnackBar('A list has been deleted');
            _this.getLists();
        });
    };
    ListsComponent.prototype.openDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(delete_dialog_component_1.DeleteDialogComponent, { width: '300px' });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.deleteList(id);
            }
        });
    };
    ListsComponent.prototype.ngOnInit = function () {
        this.getLists();
    };
    var _a;
    ListsComponent = __decorate([
        core_1.Component({
            selector: 'app-lists',
            templateUrl: './lists.component.html',
            styleUrls: ['./lists.component.sass']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, typeof (_a = typeof list_service_1.ListService !== "undefined" && list_service_1.ListService) === "function" ? _a : Object, dialog_1.MatDialog,
            snack_bar_1.MatSnackBar])
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;
