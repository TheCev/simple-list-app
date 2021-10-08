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
exports.ChangeEmailDialogComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//material components
var dialog_1 = require("@angular/material/dialog");
//forms
var forms_1 = require("@angular/forms");
var ChangeEmailDialogComponent = /** @class */ (function () {
    //Dependencies injection
    function ChangeEmailDialogComponent(dialogRef) {
        var _this = this;
        this.dialogRef = dialogRef;
        //Properties
        //title input, with validators
        this.emailInput = new forms_1.FormControl('', [forms_1.Validators.email, forms_1.Validators.required]);
        //if the cancel button is pressed
        this.onNoClick = function () { return _this.dialogRef.close(); };
    }
    //Methods
    //verify if the email if valid
    ChangeEmailDialogComponent.prototype.checkEmail = function () {
        return this.emailInput.hasError('email') && this.emailInput.dirty;
    };
    ChangeEmailDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-add-list-dialog',
            template: "\n  \t\t\t<h2 mat-dialog-title>Change the Email</h2>\n\t\t\t<div mat-dialog-content>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControl]=\"emailInput\" placeholder=\"Email\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-error *ngIf=\"checkEmail()\">Insert a valid email</mat-error>\n\t\t\t</div>\n\t\t\t<div mat-dialog-actions>\n\t\t\t\t<button mat-button (click)=\"onNoClick()\">Cancel</button>\n\t\t\t\t\t<button mat-button [mat-dialog-close]=\"emailInput.value\" [disabled]=\"!emailInput.valid\">Add</button>\n\t\t\t\t</div>\n  ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef])
    ], ChangeEmailDialogComponent);
    return ChangeEmailDialogComponent;
}());
exports.ChangeEmailDialogComponent = ChangeEmailDialogComponent;
