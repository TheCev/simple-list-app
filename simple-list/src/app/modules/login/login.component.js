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
var auth_service_1 = require("src/app/shared/services/auth.service");
var router_1 = require("@angular/router");
var snack_bar_1 = require("@angular/material/snack-bar");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSvc, router, snackBar) {
        this.authSvc = authSvc;
        this.router = router;
        this.snackBar = snackBar;
        this.login = new forms_1.FormGroup({
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(30)]),
            username: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(30)])
        });
        //verify if inputs are incorrect
        this.checkInputs = false;
    }
    //verify password min length
    LoginComponent.prototype.checkPasswordMinLength = function () {
        var passwordInput = this.login.get('password');
        return passwordInput.hasError('minlength') && passwordInput.dirty;
    };
    //verify the password max length
    LoginComponent.prototype.checkPasswordMaxLength = function () {
        var passwordInput = this.login.get('password');
        return passwordInput.hasError('maxlength') && passwordInput.dirty;
    };
    //verify the min minLength of the username
    LoginComponent.prototype.checkUsernameMinLength = function () {
        var usernameInput = this.login.get('username');
        return usernameInput.hasError('minlength') && usernameInput.dirty;
    };
    //verify the max length of the username
    LoginComponent.prototype.checkUsernameMaxLength = function () {
        var usernameInput = this.login.get('username');
        return usernameInput.hasError('maxlength') && usernameInput.dirty;
    };
    LoginComponent.prototype.openWarningSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 3500,
            panelClass: ['warning-snack-bar'],
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    };
    LoginComponent.prototype.openSuccessSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 1500,
            panelClass: ['successfully-snack-bar'],
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var formValue = this.login.value;
        this.openSuccessSnackBar('Log In ...');
        this.authSvc.login(formValue).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/lists']);
            }
        }, function (err) {
            if (err.message) {
                _this.openWarningSnackBar('Username or Password are incorrect');
            }
            else {
                _this.openWarningSnackBar('Failed Connection');
            }
            //TODO: failed connection message
        });
    };
    var _a;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, router_1.Router,
            snack_bar_1.MatSnackBar])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
