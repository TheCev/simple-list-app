"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsComponent = void 0;
//Angular
var core_1 = require("@angular/core");
var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
    }
    ListsComponent = __decorate([
        core_1.Component({
            selector: 'app-lists',
            template: "\n<!--LISTS COMPONENT-->\n<div class=\"container\">\n  <h2 class=\"subtitle\">To Do Lists </h2>\n    <!--LIST COMPONENT-->\n  <app-list></app-list>\n\n</div>\n\n  ",
            styleUrls: ['./lists.component.sass']
        })
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;
