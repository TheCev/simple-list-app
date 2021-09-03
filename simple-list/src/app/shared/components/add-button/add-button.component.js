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
exports.AddButtonComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var add_list_dialog_component_1 = require("../../../routes/lists/add-list-dialog/add-list-dialog.component");
var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(dialog) {
        this.dialog = dialog;
        this.newList = new core_1.EventEmitter;
    }
    AddButtonComponent.prototype.ngOnInit = function () {
    };
    AddButtonComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(add_list_dialog_component_1.AddListDialogComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            var listTitle = result;
            _this.newList.emit(listTitle);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AddButtonComponent.prototype, "listId", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddButtonComponent.prototype, "newList", void 0);
    AddButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-add-button',
            templateUrl: './add-button.component.html',
            styleUrls: ['./add-button.component.sass']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialog])
    ], AddButtonComponent);
    return AddButtonComponent;
}());
exports.AddButtonComponent = AddButtonComponent;
