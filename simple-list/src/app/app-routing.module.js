"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var check_login_guard_1 = require("./core/guards/check-login.guard");
var check_unlogin_guard_1 = require("./core/guards/check-unlogin.guard");
var routes = [
    {
        path: '', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/home/home.module'); }).then(function (m) { return m.HomeModule; }); }, canActivate: [check_login_guard_1.CheckLoginGuard]
    },
    {
        path: 'lists', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/lists/lists.module'); }).then(function (m) { return m.ListsModule; }); },
        canActivate: [check_unlogin_guard_1.CheckUnLoginGuard]
    },
    {
        path: 'join', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/join/join.module'); }).then(function (m) { return m.JoinModule; }); },
        canActivate: [check_login_guard_1.CheckLoginGuard]
    },
    {
        path: 'login', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/login/login.module'); }).then(function (m) { return m.LoginModule; }); },
        canActivate: [check_login_guard_1.CheckLoginGuard]
    },
    {
        path: '**', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/page-not-found/page-not-found.module'); }).then(function (m) { return m.PageNotFoundModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
