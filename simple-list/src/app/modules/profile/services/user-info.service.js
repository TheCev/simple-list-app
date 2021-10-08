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
exports.UserInfoService = void 0;
//angular
var core_1 = require("@angular/core");
//services
var api_rest_service_1 = require("src/app/shared/services/api-rest.service");
//http
var http_1 = require("@angular/common/http");
var UserInfoService = /** @class */ (function () {
    //Dependencies Injection
    function UserInfoService(api, http) {
        this.api = api;
        this.http = http;
        this.token = this.api.getToken();
        this.apiUrl = this.api.apiUrl;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                Authorization: "Bearer " + this.token
            })
        };
        this.userId = JSON.parse(localStorage.getItem('user')).userId;
    }
    //Methods
    //get the user info
    UserInfoService.prototype.getUserInfo = function () {
        return this.http.get(this.apiUrl + "/users/" + this.userId, this.httpOptions);
    };
    //change the Username
    UserInfoService.prototype.editUserInfo = function (user) {
        return this.http.put(this.apiUrl + "/users/" + this.userId, user, this.httpOptions);
    };
    var _a;
    UserInfoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof api_rest_service_1.ApiRestService !== "undefined" && api_rest_service_1.ApiRestService) === "function" ? _a : Object, http_1.HttpClient])
    ], UserInfoService);
    return UserInfoService;
}());
exports.UserInfoService = UserInfoService;
