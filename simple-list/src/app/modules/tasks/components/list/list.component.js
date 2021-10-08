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
exports.ListComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//Services
var tasks_service_1 = require("src/app/modules/tasks/services/tasks.service");
//Activated Route
var router_1 = require("@angular/router");
//rxjs
var rxjs_1 = require("rxjs");
//Angular material components
var dialog_1 = require("@angular/material/dialog");
var snack_bar_1 = require("@angular/material/snack-bar");
//components
var edit_task_dialog_component_1 = require("src/app/modules/tasks/components/edit-task-dialog/edit-task-dialog.component");
var add_task_dialog_component_1 = require("src/app/modules/tasks/components/add-task-dialog/add-task-dialog.component");
var ListComponent = /** @class */ (function () {
    //Dependy Injection
    function ListComponent(tasksSvc, route, dialog, snackBar) {
        this.tasksSvc = tasksSvc;
        this.route = route;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.load = false;
        this.tasks = [];
        this.tasksDone = [];
        this.subscriptions = new rxjs_1.Subscription(); //subscriptions array component
    }
    //Methods
    //show tasks method, refresh and show
    ListComponent.prototype.showTasks = function () {
        var _this = this;
        this.load = false; //activate the spinner
        var userId = JSON.parse(localStorage.getItem('user')).userId; //get the userId
        //get tasks from the server
        //add the Subscription to the subscriptions array
        this.subscriptions
            .add(this.tasksSvc.getTasks(userId, this.listId).subscribe(function (tasks) {
            //get the tasks
            _this.tasks = tasks;
            _this.getTasksDone();
            _this.load = true;
        }));
    };
    ListComponent.prototype.openSucessfullySnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 3500,
            panelClass: ['successfully-snack-bar'],
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
        });
    };
    //
    ListComponent.prototype.openAddTaskDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(add_task_dialog_component_1.AddTaskDialogComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.addNewTask(result);
            }
            else {
                _this.load = true;
            }
        });
    };
    ListComponent.prototype.addNewTask = function (title) {
        var _this = this;
        var userId = JSON.parse(localStorage.getItem('user')).userId;
        this.load = false;
        this.tasksSvc.sendTask(userId, this.listId, title).subscribe(function () {
            _this.showTasks();
            _this.openSucessfullySnackBar('Has been Added a Task');
        });
    };
    //delete a task method
    ListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        var index = this.tasks.findIndex(function (task) { return task.id === id; });
        this.tasks.splice(index, 1);
        //add the Subscription to the subscriptions array component
        //delete a task from the server
        this.subscriptions
            .add(this.tasksSvc.deleteTask(id).subscribe(function (task) {
            //refresh and show
            _this.openSucessfullySnackBar('Changes Saved, Has Been Deleted a Task');
        }));
    };
    ListComponent.prototype.openEditTaskDialog = function (id, oldTitle) {
        var _this = this;
        var dialogRef = this.dialog.open(edit_task_dialog_component_1.EditTaskDialogComponent, {
            width: '300px',
            data: {
                oldTitle: oldTitle
            }
        });
        this.subscriptions
            .add(dialogRef.afterClosed().subscribe(function (newTitle) {
            if (newTitle) {
                _this.editList(id, newTitle);
            }
        }));
    };
    ListComponent.prototype.editList = function (taskId, newTitle) {
        var _this = this;
        this.tasks.map(function (task) {
            if (task.id === taskId) {
                task.title = newTitle;
            }
        });
        this.subscriptions
            .add(this.tasksSvc.editTask(taskId, newTitle).subscribe(function () {
            _this.openSucessfullySnackBar('Changes Saved, Has been Edited a Task');
        }));
    };
    //LifeCycle hooks
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.load = false;
        this.subscriptions.add(this.route.data
            .subscribe(function (data) {
            var tasks = data.tasks;
            _this.tasks = tasks;
            _this.load = true;
            console.log(data);
            console.log(tasks);
            _this.getTasksDone();
        }));
    };
    ListComponent.prototype.ngOnDestroy = function () {
        //unsubscribe from  the subscriptions array component
        this.subscriptions.unsubscribe();
    };
    ListComponent.prototype.getTasksDone = function () {
        this.tasksDone = this.tasks.filter(function (task) { return task.state; });
    };
    //change state method, indicate the state if done or not the task
    ListComponent.prototype.changeState = function (task) {
        this.subscriptions.
            add(this.tasksSvc.changeState(task).subscribe());
    };
    var _a;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ListComponent.prototype, "listId", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.sass']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof tasks_service_1.TasksService !== "undefined" && tasks_service_1.TasksService) === "function" ? _a : Object, router_1.ActivatedRoute,
            dialog_1.MatDialog,
            snack_bar_1.MatSnackBar])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
