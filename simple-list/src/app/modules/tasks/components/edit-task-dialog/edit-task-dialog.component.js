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
exports.EditTaskDialogComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//Angular material component
var dialog_1 = require("@angular/material/dialog");
var dialog_2 = require("@angular/material/dialog");
//forms
var forms_1 = require("@angular/forms");
var EditTaskDialogComponent = /** @class */ (function () {
    //Dependencies injection
    function EditTaskDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //Properties
        //public invalid:boolean //if the title input is valid or not
        //public title:string //the task title
        this.titleInput = new forms_1.FormControl(this.data.oldTitle, [forms_1.Validators.required, forms_1.Validators.maxLength(40)]);
    }
    //Methods
    EditTaskDialogComponent.prototype.checkTitleInput = function () {
        return this.titleInput.hasError('maxlength') && this.titleInput.dirty;
    };
    //if press the cancel button method
    EditTaskDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditTaskDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-task-dialog',
            template: "\n\t<h2 mat-dialog-title>Edit Task</h2>\n\t\t<div mat-dialog-content >\n\t\t\t\t<mat-form-field>\n\t\t\t\t<input matInput  [formControl]=\"titleInput\" placeholder=\"Insert Task Title\" />\n\t\t\t\t</mat-form-field>\n\t\t\t<mat-error *ngIf=\"checkTitleInput()\">The title cannot be more than 40 characters</mat-error>\n\t\t</div>\n\t\t<div mat-dialog-actions>\n\t\t\t<button mat-button (click)=\"onNoClick()\">Cancel</button>\n\t\t\t<button mat-button [mat-dialog-close]=\"titleInput.value\" [disabled]=\"!titleInput.valid\" >Edit</button>\n\t\t</div>",
            styles: ['']
        }),
        __param(1, core_1.Inject(dialog_2.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], EditTaskDialogComponent);
    return EditTaskDialogComponent;
}());
exports.EditTaskDialogComponent = EditTaskDialogComponent;
