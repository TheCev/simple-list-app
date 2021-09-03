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
exports.ListService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.apiUrl = '/api';
        this.httpOptions = {
            headers: { 'Authorization': 'Bearer ' + this.token }
        };
    }
    ListService.prototype.handleError = function (error) {
        console.error('An error ocurred: ', error.error.message);
        window.alert(error.error.message);
        return rxjs_1.throwError('SOMETHING BAD HAPPENED');
    };
    ListService.prototype.getList = function (listId) {
        var _this = this;
        return this.http.get(this.apiUrl + "/lists/" + listId, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService.prototype.getTasks = function (listId) {
        var _this = this;
        return this.http.get(this.apiUrl + "/tasks/user/" + this.user.userId + "/list/" + listId, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService.prototype.sendList = function (userId, listTitle) {
        var _this = this;
        var newList = {
            'title': listTitle,
            'userId': userId
        };
        return this.http.post(this.apiUrl + "/lists/", newList, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService.prototype.sendTask = function (listId, title) {
        var tasksUrl = this.apiUrl + "/tasks";
        var newTask = {
            userId: this.user.userId,
            listId: listId,
            title: title,
            state: false
        };
        return this.http.post(tasksUrl, newTask, this.httpOptions);
    };
    ListService.prototype.getLists = function (userId) {
        var _this = this;
        return this.http.get(this.apiUrl + "/lists/user/" + userId, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService.prototype.deleteList = function (listId) {
        var _this = this;
        return this.http.delete(this.apiUrl + "/lists/" + listId, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService.prototype.deleteTask = function (taskId) {
        var _this = this;
        var taskUrl = this.apiUrl + "/tasks/" + taskId;
        return this.http.delete(taskUrl, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService.prototype.changeState = function (listId, task) {
        var _this = this;
        var tasksUrl = this.apiUrl + ("/tasks/" + task.id + "/state");
        return this.http.put(tasksUrl, task, this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService.prototype.checkUser = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/auth", this.httpOptions)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
