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
exports.TasksComponent = void 0;
var core_1 = require("@angular/core");
var list_service_1 = require("src/app/shared/services/list.service");
var router_1 = require("@angular/router");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(route, listSvc) {
        this.route = route;
        this.listSvc = listSvc;
        this.list = { 'title': "" };
        this.tasks = [];
        this.percentage = 0;
        this.tasksDone = [];
        this.loading = true;
    }
    TasksComponent.prototype.showTasks = function () {
        var _this = this;
        this.loading = true;
        this.listSvc.getTasks(this.listId).subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.updatePercentage();
            _this.loading = false;
        });
    };
    TasksComponent.prototype.getList = function () {
        var _this = this;
        this.listSvc.getList(this.listId).subscribe(function (list) {
            _this.list = list;
            _this.loading = false;
        });
    };
    TasksComponent.prototype.addNewTask = function (taskTitle) {
        var _this = this;
        this.listSvc.sendTask(this.listId, taskTitle).subscribe(function (task) {
            _this.showTasks();
            _this.updatePercentage();
        });
    };
    TasksComponent.prototype.changeState = function (task) {
        var _this = this;
        this.loading = true;
        /*switch (task.state) {
            case true:
                task.state = false
                break;
            
            case false:
                task.state = true
                break;
        }*/
        this.listSvc.changeState(this.listId, task).subscribe(function (data) {
            _this.showTasks();
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.loading = true;
        this.listSvc.deleteTask(id).subscribe(function (task) {
            //const index = this.tasks.findIndex((task) => task.id === id)
            //this.tasks.splice(index,1)
            _this.showTasks();
            _this.updatePercentage();
        });
    };
    TasksComponent.prototype.updatePercentage = function () {
        this.tasksDone = this.tasks.filter(function (task) { return task.state === true; });
        this.percentage = this.tasksDone.length / this.tasks.length * 100;
    };
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.listId = params['listId'];
            _this.showTasks();
            _this.getList();
        });
    };
    var _a;
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'app-tasks',
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.sass']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof list_service_1.ListService !== "undefined" && list_service_1.ListService) === "function" ? _a : Object])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
