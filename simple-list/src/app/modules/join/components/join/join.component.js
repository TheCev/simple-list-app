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
//Angular
var core_1 = require("@angular/core");
//Forms
var forms_1 = require("@angular/forms");
//services
var auth_service_1 = require("src/app/shared/services/auth.service");
//Router
var router_1 = require("@angular/router");
//customs validator
var join_validator_1 = require("../validators/join.validator");
//material components
var snack_bar_1 = require("@angular/material/snack-bar");
var JoinComponent = /** @class */ (function () {
    //Dependencies injetion
    function JoinComponent(authSvc, router, snackBar) {
        this.authSvc = authSvc;
        this.router = router;
        this.snackBar = snackBar;
        //Properties
        //join form with the fields
        this.join = new forms_1.FormGroup({
            username: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(30)]),
            email: new forms_1.FormControl('', [forms_1.Validators.email, forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(30)]),
            repeatedPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)])
        }, {
            validators: join_validator_1.comparePasswords
        });
        this.checkEmailExist = false;
    }
    //Methods
    //verify if the password are the same
    JoinComponent.prototype.checkPasswords = function () {
        var passwordInput = this.join.get('password');
        var repeatedPasswordInput = this.join.get('password');
        return this.join.hasError('notEqual') && passwordInput.dirty && repeatedPasswordInput.dirty;
    };
    //verify the password minlength
    JoinComponent.prototype.checkPasswordMinLength = function () {
        var passwordInput = this.join.get('password');
        return passwordInput.hasError('minlength') && passwordInput.dirty;
    };
    //verify the password max length
    JoinComponent.prototype.checkPasswordMaxLength = function () {
        var passwordInput = this.join.get('password');
        return passwordInput.hasError('maxlength') && passwordInput.dirty;
    };
    //verify the min minLength of the username
    JoinComponent.prototype.checkUsernameMinLength = function () {
        var usernameInput = this.join.get('username');
        return usernameInput.hasError('minlength') && usernameInput.dirty;
    };
    //verify the max length of the username
    JoinComponent.prototype.checkUsernameMaxLength = function () {
        var usernameInput = this.join.get('username');
        return usernameInput.hasError('maxlength') && usernameInput.dirty;
    };
    //verify if is a valid email
    JoinComponent.prototype.checkEmail = function () {
        var emailInput = this.join.get('email');
        return emailInput.hasError('email') && emailInput.dirty;
    };
    JoinComponent.prototype.openWarningSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 3500,
            panelClass: ['warning-snack-bar'],
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    };
    JoinComponent.prototype.openSuccessfullySnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 1500,
            panelClass: ['successfully-snack-bar'],
            verticalPosition: 'top',
            horizontalPosition: 'center'
        });
    };
    //check if the username already exist
    //on submit, send the data to the server
    JoinComponent.prototype.onJoin = function () {
        var _this = this;
        var data = this.join.value;
        delete data.repeatedPassword;
        this.openSuccessfullySnackBar('Sending ...');
        this.authSvc.join(data).subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            console.log(err);
            switch (err.message) {
                case "Email was used already":
                    _this.openWarningSnackBar('Email Was Used Already');
                    break;
                case "Username already exist":
                    _this.openWarningSnackBar('Username Already Exist');
                    break;
                default:
                    _this.openWarningSnackBar('Failed Connection');
            }
        });
    };
    var _a;
    JoinComponent = __decorate([
        core_1.Component({
            selector: 'app-join',
            templateUrl: 'join.component.html',
            styleUrls: ['./join.component.sass']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, router_1.Router,
            snack_bar_1.MatSnackBar])
    ], JoinComponent);
    return JoinComponent;
}());
exports.JoinComponent = JoinComponent;
