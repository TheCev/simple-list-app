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
exports.TasksService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var api_rest_service_1 = require("src/app/shared/services/api-rest.service");
var TasksService = /** @class */ (function () {
    function TasksService(http, api) {
        this.http = http;
        this.api = api;
        this.token = this.api.getToken();
        this.apiUrl = this.api.apiUrl;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + this.token
            })
        };
    }
    TasksService.prototype.getList = function (listId) {
        var _this = this;
        return this.http.get(this.apiUrl + "/lists/" + listId, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    TasksService.prototype.getTasks = function (userId, listId) {
        var _this = this;
        return this.http.get(this.apiUrl + "/tasks/user/" + userId + "/list/" + listId, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    TasksService.prototype.sendTask = function (userId, listId, title) {
        var tasksUrl = this.apiUrl + "/tasks";
        var newTask = {
            userId: userId,
            listId: listId,
            title: title,
            state: false
        };
        return this.http.post(tasksUrl, newTask, this.httpOptions);
    };
    TasksService.prototype.deleteTask = function (taskId) {
        var _this = this;
        var taskUrl = this.apiUrl + "/tasks/" + taskId;
        return this.http.delete(taskUrl, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    TasksService.prototype.changeState = function (listId, task) {
        var _this = this;
        var tasksUrl = this.apiUrl + ("/tasks/" + task.id + "/state");
        return this.http.put(tasksUrl, task, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    var _a;
    TasksService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, typeof (_a = typeof api_rest_service_1.ApiRestService !== "undefined" && api_rest_service_1.ApiRestService) === "function" ? _a : Object])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
