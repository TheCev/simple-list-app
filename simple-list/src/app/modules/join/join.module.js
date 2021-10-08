"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinModule = void 0;
//Angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//Components
var join_component_1 = require("./components/join/join.component");
//Modules
var join_routing_module_1 = require("./join-routing.module");
var material_module_1 = require("src/app/material.module");
var forms_1 = require("@angular/forms");
var JoinModule = /** @class */ (function () {
    function JoinModule() {
    }
    JoinModule = __decorate([
        core_1.NgModule({
            declarations: [
                join_component_1.JoinComponent
            ],
            imports: [
                common_1.CommonModule,
                join_routing_module_1.JoinRoutingModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], JoinModule);
    return JoinModule;
}());
exports.JoinModule = JoinModule;
