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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditListDialogComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//material component
var dialog_1 = require("@angular/material/dialog");
var dialog_2 = require("@angular/material/dialog");
//forms
var forms_1 = require("@angular/forms");
var EditListDialogComponent = /** @class */ (function () {
    //Dependencies Injection
    function EditListDialogComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        //Properties
        //input
        this.titleInput = new forms_1.FormControl(this.data.oldTitle, [forms_1.Validators.required, forms_1.Validators.maxLength(40)]);
        //if the cancel button is pressed, close the dialog
        this.onNoClick = function () { return _this.dialogRef.close(); };
    }
    //Methods
    //if the length of the input is more than 40 characters show a  message
    EditListDialogComponent.prototype.checkMaxLength = function () {
        return this.titleInput.hasError('maxlength') && this.titleInput.dirty;
    };
    EditListDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-list-dialog',
            template: "\n  \t\t\t<h2 mat-dialog-title>Edit a List</h2>\n\t\t\t<div mat-dialog-content>\n\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControl]=\"titleInput\" placeholder=\"Insert New Title\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-error *ngIf=\"checkMaxLength()\">The List Title cannot be more than 40 characters</mat-error>\n\n\t\t\t</div>\n\t\t\t<div mat-dialog-actions>\n\t\t\t\t<button mat-button (click)=\"onNoClick()\">Cancel</button>\n\t\t\t\t\t<button mat-button [mat-dialog-close]=\"titleInput.value\" [disabled]=\"!titleInput.valid\" >Edit</button>\n\t\t\t\t</div>\n  ",
            styles: ['']
        }),
        __param(1, core_1.Inject(dialog_2.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], EditListDialogComponent);
    return EditListDialogComponent;
}());
exports.EditListDialogComponent = EditListDialogComponent;
