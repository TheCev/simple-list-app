"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var lists_routing_module_1 = require("./lists-routing.module");
var lists_component_1 = require("./lists.component");
var tasks_component_1 = require("./tasks/tasks.component");
var material_module_1 = require("src/app/material.module");
var add_list_dialog_component_1 = require("./add-list-dialog/add-list-dialog.component");
var add_button_component_1 = require("src/app/shared/components/add-button/add-button.component");
var progress_bar_component_1 = require("./tasks/progress-bar/progress-bar.component");
var add_task_dialog_component_1 = require("./tasks/add-task-dialog/add-task-dialog.component");
var add_tasks_button_component_1 = require("./tasks/add-tasks-button/add-tasks-button.component");
var delete_button_component_1 = require("./delete-button/delete-button.component");
var delete_dialog_component_1 = require("./delete-dialog/delete-dialog.component");
var ListsModule = /** @class */ (function () {
    function ListsModule() {
    }
    ListsModule = __decorate([
        core_1.NgModule({
            declarations: [
                lists_component_1.ListsComponent,
                tasks_component_1.TasksComponent,
                add_list_dialog_component_1.AddListDialogComponent,
                add_button_component_1.AddButtonComponent,
                progress_bar_component_1.ProgressBarComponent,
                add_task_dialog_component_1.AddTaskDialogComponent,
                add_tasks_button_component_1.AddTasksButtonComponent,
                delete_button_component_1.DeleteButtonComponent,
                delete_dialog_component_1.DeleteDialogComponent
            ],
            imports: [
                common_1.CommonModule,
                lists_routing_module_1.ListsRoutingModule,
                material_module_1.MaterialModule,
            ]
        })
    ], ListsModule);
    return ListsModule;
}());
exports.ListsModule = ListsModule;
