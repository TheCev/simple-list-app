"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tasks_routing_module_1 = require("./tasks-routing.module");
var tasks_component_1 = require("./components/tasks.component");
var progress_bar_component_1 = require("src/app/modules/tasks/components/progress-bar/progress-bar.component");
var add_task_dialog_component_1 = require("src/app/modules/tasks/components/add-task-dialog/add-task-dialog.component");
var add_tasks_button_component_1 = require("src/app/modules/tasks/components/add-tasks-button/add-tasks-button.component");
var material_module_1 = require("src/app/material.module");
var shared_module_1 = require("src/app/shared/shared.module");
var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        core_1.NgModule({
            declarations: [
                tasks_component_1.TasksComponent,
                progress_bar_component_1.ProgressBarComponent,
                add_task_dialog_component_1.AddTaskDialogComponent,
                add_tasks_button_component_1.AddTasksButtonComponent,
            ],
            imports: [
                common_1.CommonModule,
                tasks_routing_module_1.TasksRoutingModule,
                material_module_1.MaterialModule,
                shared_module_1.SharedModule
            ]
        })
    ], TasksModule);
    return TasksModule;
}());
exports.TasksModule = TasksModule;
