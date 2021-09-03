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
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var AddTaskDialogComponent = /** @class */ (function () {
    function AddTaskDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AddTaskDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddTaskDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-add-task-dialog',
            templateUrl: './add-task-dialog.component.html',
            styles: ['']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef])
    ], AddTaskDialogComponent);
    return AddTaskDialogComponent;
}());
exports.AddTaskDialogComponent = AddTaskDialogComponent;
