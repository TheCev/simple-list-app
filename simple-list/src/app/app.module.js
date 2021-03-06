"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var header_component_1 = require("./shared/components/header/header.component");
var material_module_1 = require("./material.module");
var http_1 = require("@angular/common/http");
var page_not_found_component_1 = require("src/app/modules/page-not-found/components/page-not-found/page-not-found.component");
var home_module_1 = require("src/app/modules/home/home.module");
var login_module_1 = require("src/app/modules/login/login.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                http_1.HttpClientModule,
                home_module_1.HomeModule,
                login_module_1.LoginModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
