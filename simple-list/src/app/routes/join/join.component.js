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
exports.JoinComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../shared/services/auth.service");
var router_1 = require("@angular/router");
var join_validator_1 = require("./join.validator");
var JoinComponent = /** @class */ (function () {
    function JoinComponent(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.join = new forms_1.FormGroup({
            username: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            email: new forms_1.FormControl('', [forms_1.Validators.email, forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            repeatedPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)])
        }, {
            validators: join_validator_1.comparePasswords
        });
    }
    JoinComponent.prototype.ngOnInit = function () {
    };
    JoinComponent.prototype.checkPasswords = function () {
        var passwordInput = this.join.get('password');
        var repeatedPasswordInput = this.join.get('password');
        return this.join.hasError('notEqual') && passwordInput.dirty && repeatedPasswordInput.dirty;
    };
    JoinComponent.prototype.checkUsername = function () {
        var usernameInput = this.join.get('username');
        return usernameInput.hasError('minlength') && usernameInput.dirty;
    };
    JoinComponent.prototype.checkEmail = function () {
        var emailInput = this.join.get('email');
        return emailInput.hasError('email') && emailInput.dirty;
    };
    JoinComponent.prototype.onJoin = function () {
        var _this = this;
        var data = this.join.value;
        delete data.repeatedPassword;
        this.authSvc.join(data).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/login']);
            }
        });
    };
    JoinComponent = __decorate([
        core_1.Component({
            selector: 'app-join',
            templateUrl: 'join.component.html',
            styleUrls: ['./join.component.sass']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], JoinComponent);
    return JoinComponent;
}());
exports.JoinComponent = JoinComponent;
