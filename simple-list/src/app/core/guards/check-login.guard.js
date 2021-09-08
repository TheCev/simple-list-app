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
exports.CheckLoginGuard = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var auth_service_1 = require("src/app/shared/services/auth.service");
var router_1 = require("@angular/router");
var CheckLoginGuard = /** @class */ (function () {
    function CheckLoginGuard(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    CheckLoginGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authSvc.isLogged.pipe(operators_1.take(1), operators_1.map(function (isLogged) {
            if (!isLogged) {
                return true;
            }
            else {
                _this.router.navigate(['/lists']);
                return false;
            }
        }));
    };
    var _a;
    CheckLoginGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, router_1.Router])
    ], CheckLoginGuard);
    return CheckLoginGuard;
}());
exports.CheckLoginGuard = CheckLoginGuard;
