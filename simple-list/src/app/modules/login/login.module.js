"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_component_1 = require("./login.component");
var material_module_1 = require("src/app/material.module");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var loginRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent
            ],
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(loginRoutes)
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
