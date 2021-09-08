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
//Angular
var core_1 = require("@angular/core");
//Http
var http_1 = require("@angular/common/http");
//rxjs
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
//Services
var api_rest_service_1 = require("src/app/shared/services/api-rest.service"); //import the api service
var ListService = /** @class */ (function () {
    //Dependencys injection
    function ListService(http, api) {
        this.http = http;
        this.api = api;
        //Properties
        //handle the comunication with events click, between the list component and the button component
        this.addListEvent = new rxjs_1.Subject();
        this.apiUrl = this.api.apiUrl; //get the api url
        this.token = this.api.getToken(); //get the token for the api
        //Http headers config
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
        };
    }
    //Methods
    // send the click event to the list component method
    ListService.prototype.sendAddListEvent = function () {
        //send the click event
        this.addListEvent.next();
    };
    //get the click event in the list method
    ListService.prototype.getAddListEvent = function () {
        //get the click event
        return this.addListEvent.asObservable();
    };
    //send the list method
    ListService.prototype.sendList = function (userId, listTitle) {
        var _this = this;
        //create the new list
        var newList = {
            'title': listTitle,
            'userId': userId
        };
        //send the list to the database throught the http post method
        return this.http.post(this.apiUrl + "/lists/", newList, this.httpOptions)
            .pipe(
        //handle errors
        operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    // get the lists of the user method
    ListService.prototype.getLists = function (userId) {
        var _this = this;
        //get all the lists from the server throught the http get method
        return this.http.get(this.apiUrl + "/lists/user/" + userId, this.httpOptions)
            .pipe(
        //handle errors
        operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    //Delete a list
    ListService.prototype.deleteList = function (listId) {
        var _this = this;
        //delete a list from the server throught the http delete method
        return this.http.delete(this.apiUrl + "/lists/" + listId, this.httpOptions)
            .pipe(
        //handle errors
        operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    //Edit a list method
    ListService.prototype.editList = function (listId, listTitle) {
        //create data object
        var data = {
            'title': listTitle
        };
        //edit a list from the server throught the http put method
        return this.http.put(this.apiUrl + "/lists/" + listId, data, this.httpOptions);
    };
    var _a;
    ListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, typeof (_a = typeof api_rest_service_1.ApiRestService !== "undefined" && api_rest_service_1.ApiRestService) === "function" ? _a : Object])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
