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
exports.ListComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//handles material components 
var dialog_1 = require("@angular/material/dialog"); //import the material dialog
var snack_bar_1 = require("@angular/material/snack-bar"); // import the material snackbar
//services
var list_service_1 = require("src/app/modules/lists/services/list.service"); //import the listSvc
//Components
var delete_dialog_component_1 = require("src/app/modules/lists/components/delete-dialog/delete-dialog.component");
var add_list_dialog_component_1 = require("src/app/modules/lists/components/add-list-dialog/add-list-dialog.component");
var edit_list_dialog_component_1 = require("src/app/modules/lists/components/edit-list-dialog/edit-list-dialog.component");
// rxjs
var rxjs_1 = require("rxjs");
var ListComponent = /** @class */ (function () {
    //Dependencys Injection
    function ListComponent(listSvc, dialog, snackBar) {
        this.listSvc = listSvc;
        this.dialog = dialog;
        this.snackBar = snackBar;
        //Properties
        this.subscriptions = new rxjs_1.Subscription(); //array of all the component subscription
        this.items = []; //the lists
        this.load = false; //load initialize in false, so active the spinner charger
        //handle the click on the add button component
        this.addNewList();
    }
    //Open a snackBar method
    ListComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 3000
        });
    };
    //add a new list method
    ListComponent.prototype.addNewList = function () {
        var _this = this;
        //subscribe for get the click on the add button
        //add the subscription to the subscriptions array
        this.subscriptions
            .add(this.listSvc.getAddListEvent().subscribe(function () {
            //open the add list dialog
            _this.openAddListDialog();
        }));
    };
    // delete a list method
    ListComponent.prototype.deleteList = function (id) {
        var _this = this;
        //subscribe for the listSvc deleteList method
        // add the subscription to the subscriptions array
        this.subscriptions
            .add(this.listSvc.deleteList(id).subscribe(function () {
            _this.getLists(); //refresh and show
        }));
    };
    //open the add list dialog method
    ListComponent.prototype.openAddListDialog = function () {
        var _this = this;
        //open the add list dialog component by the dialog open method
        var dialogRef = this.dialog.open(add_list_dialog_component_1.AddListDialogComponent, {
            width: '300px'
        });
        //get the new list after closed the dialog ref with the afterClosed method
        //add the subscription to the subscription array
        this.subscriptions
            .add(dialogRef.afterClosed().subscribe(function (result) {
            //if the value is valid
            if (result) {
                //get the values
                var listTitle = result;
                var userId = JSON.parse(localStorage.getItem('user')).userId; //get the userId
                //save through the listSvc sendList method
                _this.listSvc.sendList(userId, listTitle).subscribe(function () {
                    _this.getLists(); //refresh and show
                });
            }
        }));
    };
    //open the delete dialog method
    ListComponent.prototype.openDeleteDialog = function (id) {
        var _this = this;
        //open the delete dialog component by the dialog open method
        var dialogRef = this.dialog.open(delete_dialog_component_1.DeleteDialogComponent, { width: '300px' });
        // get the values after closed the dialog
        // add the subscription to the subscriptions array
        this.subscriptions
            .add(dialogRef.afterClosed().subscribe(function (result) {
            //verify the response
            if (result === true) {
                //delete list
                _this.deleteList(id);
            }
        }));
    };
    //open the edit dialog method
    ListComponent.prototype.openEditDialog = function (id) {
        var _this = this;
        //open the edit list dialog component by the dialog open method
        var dialogRef = this.dialog.open(edit_list_dialog_component_1.EditListDialogComponent, {
            width: '300px'
        });
        //get the values after closed the edit list dialog component
        this.subscriptions
            .add(dialogRef.afterClosed().subscribe(function (newTitle) {
            //if the value is valid
            if (newTitle) {
                //save through the listSvc EditList
                _this.editList(id, newTitle);
            }
        }));
    };
    //Edit list method
    ListComponent.prototype.editList = function (id, newTitle) {
        var _this = this;
        this.subscriptions
            .add(this.listSvc.editList(id, newTitle).subscribe(function () {
            _this.getLists(); //refresh and show
        }));
    };
    //refresh and get lists then show them method
    ListComponent.prototype.getLists = function () {
        var _this = this;
        //get the userId
        var userId = JSON.parse(localStorage.getItem('user')).userId;
        this.load = false; //active the spinner charger
        //subscribe for the listSvc getLists method, so get the lists
        // add the subscription to the subscriptions array
        this.subscriptions
            .add(this.listSvc.getLists(userId).subscribe(function (lists) {
            _this.items = lists; //get the lists
            _this.load = true; //desactive the spinner charger
        }));
    };
    //Lifecycle hooks
    ListComponent.prototype.ngOnInit = function () {
        //initialize loading the lists
        this.getLists();
    };
    ListComponent.prototype.ngOnDestroy = function () {
        //unsubscribe of all the component subscription
        this.subscriptions.unsubscribe();
    };
    var _a;
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.sass']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof list_service_1.ListService !== "undefined" && list_service_1.ListService) === "function" ? _a : Object, dialog_1.MatDialog,
            snack_bar_1.MatSnackBar])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
