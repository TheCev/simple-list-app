"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var lists_component_1 = require("./components/lists/lists.component");
var check_unlogin_guard_1 = require("src/app/core/guards/check-unlogin.guard");
var tasks_resolver_service_1 = require("src/app/modules/tasks/services/tasks-resolver.service");
var list_title_resolver_service_1 = require("src/app/modules/tasks/services/list-title-resolver.service");
var lists_resolver_service_1 = require("./services/lists-resolver.service");
var routes = [
    {
        path: '',
        component: lists_component_1.ListsComponent,
        resolve: {
            lists: lists_resolver_service_1.ListsResolverService
        }
    },
    {
        path: 'tasks/:listId', loadChildren: function () { return Promise.resolve().then(function () { return require('../tasks/tasks.module'); }).then(function (m) { return m.TasksModule; }); },
        canActivate: [check_unlogin_guard_1.CheckUnLoginGuard],
        resolve: {
            list: list_title_resolver_service_1.ListTitleResolverService,
            tasks: tasks_resolver_service_1.TasksResolverService
        }
    }
];
var ListsRoutingModule = /** @class */ (function () {
    function ListsRoutingModule() {
    }
    ListsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ListsRoutingModule);
    return ListsRoutingModule;
}());
exports.ListsRoutingModule = ListsRoutingModule;
