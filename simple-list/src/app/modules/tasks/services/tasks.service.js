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
//Angular
var core_1 = require("@angular/core");
//Http
var http_1 = require("@angular/common/http");
//Rxjs
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
//services
var api_rest_service_1 = require("src/app/shared/services/api-rest.service");
var TasksService = /** @class */ (function () {
    //Dependendys injection
    function TasksService(http, api) {
        this.http = http;
        this.api = api;
        //Properties
        //property for comunicate between add button component and list component
        this.addTaskEvent = new rxjs_1.Subject();
        this.token = this.api.getToken(); //get the token
        this.apiUrl = this.api.apiUrl; // get the api url
        //http headers config
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + this.token
            })
        };
    }
    //Methods
    //send the click on the add task button method
    TasksService.prototype.sendAddTaskEvent = function () {
        //send the event
        this.addTaskEvent.next();
    };
    //get the click on the add task button method
    TasksService.prototype.getAddTaskEvent = function () {
        //return as observable
        return this.addTaskEvent.asObservable();
    };
    //get only one list method
    TasksService.prototype.getList = function (listId) {
        var _this = this;
        //return a observable from the http get method
        return this.http.get(this.apiUrl + "/lists/" + listId, this.httpOptions)
            .pipe(
        //handle errors
        operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    //get tasks of a list method
    TasksService.prototype.getTasks = function (userId, listId) {
        var _this = this;
        //return a observable contain the tasks from the http get method
        return this.http.get(this.apiUrl + "/tasks/user/" + userId + "/list/" + listId, this.httpOptions)
            .pipe(
        //handle errors
        operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    //send a new task 
    TasksService.prototype.sendTask = function (userId, listId, title) {
        var tasksUrl = this.apiUrl + "/tasks";
        //create the new task
        var newTask = {
            userId: userId,
            listId: listId,
            title: title,
            state: false
        };
        //return a observable from the http post method
        return this.http.post(tasksUrl, newTask, this.httpOptions);
    };
    //delete a task method
    TasksService.prototype.deleteTask = function (taskId) {
        var _this = this;
        var taskUrl = this.apiUrl + "/tasks/" + taskId;
        //return a observable from the http delete method
        return this.http.delete(taskUrl, this.httpOptions)
            .pipe(
        //handle errors
        operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    //change a state of one task
    TasksService.prototype.changeState = function (listId, task) {
        var _this = this;
        var tasksUrl = this.apiUrl + ("/tasks/" + task.id + "/state");
        //return a observable from the http put method
        return this.http.put(tasksUrl, task, this.httpOptions)
            .pipe(
        //handle errors
        operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    TasksService.prototype.editTask = function (taskId, taskTitle) {
        var newTask = {
            title: taskTitle
        };
        return this.http.put(this.apiUrl + "/tasks/" + taskId, newTask, this.httpOptions);
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
