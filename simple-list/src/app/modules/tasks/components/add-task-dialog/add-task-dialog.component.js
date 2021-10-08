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
exports.AddTaskDialogComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//material component
var dialog_1 = require("@angular/material/dialog");
//forms
var forms_1 = require("@angular/forms");
var AddTaskDialogComponent = /** @class */ (function () {
    //Dependencies injection
    function AddTaskDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        //Properties
        //public invalid:boolean //if the title input is valid or not
        //public title:string //the task title
        this.titleInput = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(40)]);
    }
    //if the cancel button is pressed
    AddTaskDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close(); //close the 
    };
    AddTaskDialogComponent.prototype.checkTitleInput = function () {
        return this.titleInput.hasError('maxlength') && this.titleInput.dirty;
    };
    AddTaskDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-add-task-dialog',
            template: "\n\t<h2 mat-dialog-title>Create a New Task</h2>\n\t\t<div mat-dialog-content >\n\t\t\t<mat-form-field>\n\t\t\t<input matInput [formControl]=\"titleInput\" placeholder=\"Insert Task Title\" />\n\t\t\t</mat-form-field>\n\t\t<mat-error *ngIf=\"checkTitleInput()\">The title cannot be more than 40 characters</mat-error>\n\n\t\t</div>\n\t\t<div mat-dialog-actions>\n\t\t\t<button mat-button (click)=\"onNoClick()\">Cancel</button>\n\t\t\t<button mat-button [mat-dialog-close]=\"titleInput.value\" [disabled]=\"!titleInput.valid\" >Add</button>\n\t\t</div>",
            styles: ['']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef])
    ], AddTaskDialogComponent);
    return AddTaskDialogComponent;
}());
exports.AddTaskDialogComponent = AddTaskDialogComponent;
