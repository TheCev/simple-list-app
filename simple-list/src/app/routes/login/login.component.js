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
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../shared/services/auth.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.login = new forms_1.FormGroup({
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var formValue = this.login.value;
        this.authSvc.login(formValue).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/lists']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
