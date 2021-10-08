"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsModule = void 0;
//Angular Modules
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//Components
var edit_list_dialog_component_1 = require("./components/edit-list-dialog/edit-list-dialog.component");
var list_component_1 = require("./components/list/list.component");
var delete_dialog_component_1 = require("./components/delete-dialog/delete-dialog.component");
var lists_component_1 = require("./components/lists/lists.component");
var add_list_dialog_component_1 = require("./components/add-list-dialog/add-list-dialog.component");
var add_button_component_1 = require("src/app/shared/components/add-button/add-button.component");
var lists_routing_module_1 = require("./lists-routing.module");
var material_module_1 = require("src/app/material.module");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("src/app/shared/shared.module");
var ListsModule = /** @class */ (function () {
    function ListsModule() {
    }
    ListsModule = __decorate([
        core_1.NgModule({
            declarations: [
                lists_component_1.ListsComponent,
                add_list_dialog_component_1.AddListDialogComponent,
                add_button_component_1.AddButtonComponent,
                delete_dialog_component_1.DeleteDialogComponent,
                list_component_1.ListComponent,
                edit_list_dialog_component_1.EditListDialogComponent,
            ],
            imports: [
                common_1.CommonModule,
                lists_routing_module_1.ListsRoutingModule,
                material_module_1.MaterialModule,
                shared_module_1.SharedModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                add_button_component_1.AddButtonComponent
            ]
        })
    ], ListsModule);
    return ListsModule;
}());
exports.ListsModule = ListsModule;
