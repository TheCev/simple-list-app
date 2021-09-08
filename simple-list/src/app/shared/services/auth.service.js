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
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var angular_jwt_1 = require("@auth0/angular-jwt");
var router_1 = require("@angular/router");
var api_rest_service_1 = require("./api-rest.service");
var helper = new angular_jwt_1.JwtHelperService();
var AuthService = /** @class */ (function () {
    function AuthService(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.loggedIn = new rxjs_1.BehaviorSubject(false);
        this.apiUrl = this.api.apiUrl;
        this.checkToken();
    }
    Object.defineProperty(AuthService.prototype, "isLogged", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.join = function (authData) {
        var _this = this;
        return this.http.post(this.apiUrl + "/users/", authData)
            .pipe(operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    AuthService.prototype.login = function (authData) {
        var _this = this;
        return this.http
            .post(this.apiUrl + "/auth/login", authData)
            .pipe(operators_1.map(function (res) {
            //Save token()
            if (res.token) {
                var user = helper.decodeToken(res.token);
                _this.saveToken(user, res.token);
                _this.loggedIn.next(true);
            }
            return res;
        }), operators_1.catchError(function (err) { return _this.api.handleError(err); }));
    };
    AuthService.prototype.saveToken = function (user, token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    };
    AuthService.prototype.readToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.checkToken = function () {
        var userToken = localStorage.getItem('token');
        if (userToken) {
            var isExpired = helper.isTokenExpired(userToken);
            if (isExpired) {
                this.logout();
            }
            else {
                this.loggedIn.next(true);
            }
        }
        else {
            this.loggedIn.next(false);
        }
        //set UserIsLogged = isExpired
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
        this.loggedIn.next(false);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router,
            api_rest_service_1.ApiRestService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
