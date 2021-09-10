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
exports.EditTaskDialogComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var EditTaskDialogComponent = /** @class */ (function () {
    function EditTaskDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    EditTaskDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditTaskDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-task-dialog',
            template: "\n\t<h2 mat-dialog-title>Edit Task</h2>\n\t\t<div mat-dialog-content >\n\n\t\t<mat-form-field>\n\t\t\t<input matInput #title placeholder=\"Insert New Title\" />\n\t\t</mat-form-field>\n\n\t\t</div>\n\t\t<div mat-dialog-actions>\n\t\t\t<button mat-button (click)=\"onNoClick()\">Cancel</button>\n\t\t\t<button mat-button [mat-dialog-close]=\"title.value\" >Add</button>\n\t\t</div>",
            styles: ['']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef])
    ], EditTaskDialogComponent);
    return EditTaskDialogComponent;
}());
exports.EditTaskDialogComponent = EditTaskDialogComponent;
