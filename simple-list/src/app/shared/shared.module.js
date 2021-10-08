"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var options_button_component_1 = require("src/app/shared/components/options-button/options-button.component");
var material_module_1 = require("src/app/material.module");
var title_input_component_1 = require("./components/title-input/title-input.component");
var forms_1 = require("@angular/forms");
var succesfully_snackbar_component_1 = require("./components/succesfully-snackbar/succesfully-snackbar.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                options_button_component_1.OptionsButtonComponent,
                title_input_component_1.TitleInputComponent,
                succesfully_snackbar_component_1.SuccesfullySnackbarComponent
            ],
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                options_button_component_1.OptionsButtonComponent,
                title_input_component_1.TitleInputComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
