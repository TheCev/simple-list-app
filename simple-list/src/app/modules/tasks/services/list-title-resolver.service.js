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
exports.ListTitleResolverService = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tasks_service_1 = require("./tasks.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ListTitleResolverService = /** @class */ (function () {
    function ListTitleResolverService(tasksSvc, router) {
        this.tasksSvc = tasksSvc;
        this.router = router;
    }
    ListTitleResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('listId');
        return this.tasksSvc.getList(id).pipe(operators_1.take(1), operators_1.mergeMap(function (list) {
            if (list) {
                return rxjs_1.of(list);
            }
            else {
                _this.router.navigate(['lists']);
                return rxjs_1.EMPTY;
            }
        }));
    };
    ListTitleResolverService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [tasks_service_1.TasksService,
            router_1.Router])
    ], ListTitleResolverService);
    return ListTitleResolverService;
}());
exports.ListTitleResolverService = ListTitleResolverService;
