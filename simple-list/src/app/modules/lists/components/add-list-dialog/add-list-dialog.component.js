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
exports.AddListDialogComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//material components
var dialog_1 = require("@angular/material/dialog");
//forms
var forms_1 = require("@angular/forms");
var AddListDialogComponent = /** @class */ (function () {
    //Dependencies injection
    function AddListDialogComponent(dialogRef) {
        var _this = this;
        this.dialogRef = dialogRef;
        //Properties
        //title input, with validators
        this.titleInput = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(40)]);
        //if the cancel button is pressed
        this.onNoClick = function () { return _this.dialogRef.close(); };
    }
    //Methods
    //verify if have more than 40 characters, then show an error
    AddListDialogComponent.prototype.checkMaxLength = function () {
        return this.titleInput.hasError('maxlength') && this.titleInput.dirty;
    };
    AddListDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-add-list-dialog',
            template: "\n  \t\t\t<h2 mat-dialog-title>Create a New To Do List</h2>\n\t\t\t<div mat-dialog-content>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControl]=\"titleInput\" placeholder=\"Insert List Title\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-error *ngIf=\"checkMaxLength()\">The List Title cannot be more than 40 characters</mat-error>\n\t\t\t</div>\n\t\t\t<div mat-dialog-actions>\n\t\t\t\t<button mat-button (click)=\"onNoClick()\">Cancel</button>\n\t\t\t\t\t<button mat-button [mat-dialog-close]=\"titleInput.value\" [disabled]=\"!titleInput.valid\">Add</button>\n\t\t\t\t</div>\n  ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef])
    ], AddListDialogComponent);
    return AddListDialogComponent;
}());
exports.AddListDialogComponent = AddListDialogComponent;
