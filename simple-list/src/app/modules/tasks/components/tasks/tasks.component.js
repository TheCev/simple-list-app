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
//Angular
var core_1 = require("@angular/core");
//Services
var tasks_service_1 = require("src/app/modules/tasks/services/tasks.service");
//Router
var router_1 = require("@angular/router");
//Rxjs
var rxjs_1 = require("rxjs");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(route, tasksSvc) {
        this.route = route;
        this.tasksSvc = tasksSvc;
        this.subscriptions = new rxjs_1.Subscription();
    }
    TasksComponent.prototype.handleAddTask = function () {
        this.tasksSvc.sendAddTaskEvent();
    };
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.route.data.subscribe(function (data) {
            _this.list = data.list;
        }));
    };
    TasksComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    var _a;
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'app-tasks',
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.sass']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof tasks_service_1.TasksService !== "undefined" && tasks_service_1.TasksService) === "function" ? _a : Object])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
