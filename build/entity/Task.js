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
exports.Task = void 0;
//Imports
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var List_1 = require("./List");
//Create Entity and export it
//TODO generate foreign keys and class-validation
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Task.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Task.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Task.prototype, "listId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Task.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Task.prototype, "state", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return List_1.List; }, function (list) { return list.tasks; }, {
            onDelete: 'CASCADE'
        }),
        __metadata("design:type", List_1.List)
    ], Task.prototype, "list", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.tasks; }, {
            onDelete: 'CASCADE'
        }),
        __metadata("design:type", User_1.User)
    ], Task.prototype, "user", void 0);
    Task = __decorate([
        typeorm_1.Entity()
    ], Task);
    return Task;
}());
exports.Task = Task;
