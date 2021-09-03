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
exports.AddTasksButtonComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var add_task_dialog_component_1 = require("../add-task-dialog/add-task-dialog.component");
var AddTasksButtonComponent = /** @class */ (function () {
    function AddTasksButtonComponent(dialog) {
        this.dialog = dialog;
        this.newTask = new core_1.EventEmitter;
    }
    AddTasksButtonComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(add_task_dialog_component_1.AddTaskDialogComponent, { width: '300px' });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != "") {
                var taskTitle = result;
                _this.newTask.emit(taskTitle);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AddTasksButtonComponent.prototype, "listId", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddTasksButtonComponent.prototype, "newTask", void 0);
    AddTasksButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-add-tasks-button',
            template: "<button mat-icon-button (click)=\"openDialog()\">\n \t\t\t\t<mat-icon color=\"primary\">add_circle</mat-icon>\n \t\t\t</button>",
            styleUrls: ['./add-tasks-button.component.sass']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialog])
    ], AddTasksButtonComponent);
    return AddTasksButtonComponent;
}());
exports.AddTasksButtonComponent = AddTasksButtonComponent;
