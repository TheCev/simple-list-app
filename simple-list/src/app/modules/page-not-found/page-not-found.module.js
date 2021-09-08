"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFoundModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var page_not_found_routing_module_1 = require("./page-not-found-routing.module");
var page_not_found_component_1 = require("./components/page-not-found/page-not-found.component");
var material_module_1 = require("src/app/material.module");
var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = __decorate([
        core_1.NgModule({
            declarations: [
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                common_1.CommonModule,
                page_not_found_routing_module_1.PageNotFoundRoutingModule,
                material_module_1.MaterialModule
            ]
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());
exports.PageNotFoundModule = PageNotFoundModule;
