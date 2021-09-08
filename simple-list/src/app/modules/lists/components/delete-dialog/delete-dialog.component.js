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
exports.DeleteDialogComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-dialog',
            template: "<h1 mat-dialog-title>Delete a List</h1>\n\t\t\t\t<div mat-dialog-content>Are you sure?.</div>\n\t\t\t<div mat-dialog-actions>\n  \t\t\t\t<button mat-button mat-dialog-close >Close</button>\n  \t\t\t\t<button mat-button [mat-dialog-close]=\"true\" color=\"warn\">Delete</button>\n\t\t\t</div>",
            styles: ['']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());
exports.DeleteDialogComponent = DeleteDialogComponent;
