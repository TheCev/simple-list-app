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
exports.ProfileComponent = void 0;
//Angular
var core_1 = require("@angular/core");
//Services
var user_info_service_1 = require("src/app/modules/profile/services/user-info.service");
//rxjs
var rxjs_1 = require("rxjs");
//Components
var change_username_dialog_component_1 = require("src/app/modules/profile/components/change-username-dialog/change-username-dialog.component");
var change_email_dialog_component_1 = require("src/app/modules/profile/components/change-email-dialog/change-email-dialog.component");
//angular component
var dialog_1 = require("@angular/material/dialog");
var ProfileComponent = /** @class */ (function () {
    //Dependencies injection
    function ProfileComponent(userInfoSvc, dialog) {
        this.userInfoSvc = userInfoSvc;
        this.dialog = dialog;
        //Properties
        this.user = {
            username: 'username',
            email: 'email'
        };
        this.subscriptions = new rxjs_1.Subscription();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.showUserInfo();
    };
    ProfileComponent.prototype.showUserInfo = function () {
        var _this = this;
        this.subscriptions
            .add(this.userInfoSvc.getUserInfo().subscribe(function (user) {
            _this.user = user;
        }));
    };
    ProfileComponent.prototype.openChangeEmailDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(change_email_dialog_component_1.ChangeEmailDialogComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe((function (newEmail) {
            if (newEmail) {
                var newUser = {
                    username: _this.user.username,
                    email: newEmail,
                };
                _this.editUser(newUser);
            }
        }));
    };
    ProfileComponent.prototype.openChangeUsernameDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(change_username_dialog_component_1.ChangeUsernameDialogComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (newUsername) {
            if (newUsername) {
                var newUser = {
                    username: newUsername,
                    email: _this.user.email
                };
                _this.editUser(newUser);
            }
        });
    };
    ProfileComponent.prototype.editUser = function (newUser) {
        var _this = this;
        this.subscriptions
            .add(this.userInfoSvc.editUserInfo(newUser).subscribe(function () {
            _this.showUserInfo();
        }));
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    var _a;
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.sass']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof user_info_service_1.UserInfoService !== "undefined" && user_info_service_1.UserInfoService) === "function" ? _a : Object, dialog_1.MatDialog])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
