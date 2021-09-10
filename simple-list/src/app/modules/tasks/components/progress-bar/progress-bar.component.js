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
exports.ProgressBarComponent = void 0;
var core_1 = require("@angular/core");
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "tasksDone", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "totalTasks", void 0);
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'app-progress-bar',
            template: "\n <p class=\"text\">{{  tasksDone +\"/\"+ totalTasks || 0}}</p>\n<mat-progress-bar mode=\"determinate\" color=\"warn\" [value]=\"(tasksDone / totalTasks) * 100\" >\n </mat-progress-bar>",
            styles: ['']
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;
