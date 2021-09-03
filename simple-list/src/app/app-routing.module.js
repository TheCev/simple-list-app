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
var page_not_found_component_1 = require("src/app/routes/page-not-found/page-not-found.component");
var check_login_guard_1 = require("./shared/check-login.guard");
var check_unlogin_guard_1 = require("./shared/check-unlogin.guard");
var home_component_1 = require("./routes/home/home.component");
var routes = [
    {
        path: '', component: home_component_1.HomeComponent, canActivate: [check_login_guard_1.CheckLoginGuard]
    },
    {
        path: 'lists', loadChildren: function () { return Promise.resolve().then(function () { return require('./routes/lists/lists.module'); }).then(function (m) { return m.ListsModule; }); },
        canActivate: [check_unlogin_guard_1.CheckUnLoginGuard]
    },
    {
        path: 'join', loadChildren: function () { return Promise.resolve().then(function () { return require('./routes/join/join.module'); }).then(function (m) { return m.JoinModule; }); },
        canActivate: [check_login_guard_1.CheckLoginGuard]
    },
    {
        path: 'login', loadChildren: function () { return Promise.resolve().then(function () { return require('./routes/login/login.module'); }).then(function (m) { return m.LoginModule; }); },
        canActivate: [check_login_guard_1.CheckLoginGuard]
    },
    {
        path: "**", component: page_not_found_component_1.PageNotFoundComponent
    }
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
