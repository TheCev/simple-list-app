"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFoundComponent = void 0;
var core_1 = require("@angular/core");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: "<div class=\"container\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-title>Error:404 - Page Not Found </mat-card-title>\n\t\t\t\t\t<mat-card-content><mat-icon>find_in_page</mat-icon></mat-card-content>\n\t\t\t\t\t<mat-card-footer>The page wich you is trying to get not exist</mat-card-footer>\n\t\t\t\t</mat-card>\n\t\t\t</div>",
            styleUrls: ['./page-not-found.component.sass']
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
