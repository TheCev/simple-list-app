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
exports.ListsComponent = void 0;
var core_1 = require("@angular/core");
var list_service_1 = require("src/app/modules/lists/services/list.service");
var ListsComponent = /** @class */ (function () {
    function ListsComponent(listSvc) {
        this.listSvc = listSvc;
    }
    ListsComponent.prototype.handleAddList = function () {
        this.listSvc.sendAddListEvent();
    };
    var _a;
    ListsComponent = __decorate([
        core_1.Component({
            selector: 'app-lists',
            template: "\n\n<div class=\"container\">\n  <h2 class=\"subtitle\">To Do Lists </h2>\n    \n  <app-list></app-list>\n\n  <app-add-button (click)=\"handleAddList()\"></app-add-button>\n\n</div>\n\n  ",
            styleUrls: ['./lists.component.sass']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof list_service_1.ListService !== "undefined" && list_service_1.ListService) === "function" ? _a : Object])
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;
