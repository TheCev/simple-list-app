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
exports.ApiRestService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ApiRestService = /** @class */ (function () {
    function ApiRestService() {
        this.token = localStorage.getItem('token');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.apiUrl = '/api';
    }
    ApiRestService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    ApiRestService.prototype.handleError = function (error) {
        if (error.error.message)
            console.error('An error ocurred: ', error.error.message);
        window.alert(error.error.message);
        return rxjs_1.throwError('SOMETHING BAD HAPPENED');
    };
    ApiRestService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ApiRestService);
    return ApiRestService;
}());
exports.ApiRestService = ApiRestService;
