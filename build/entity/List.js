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
exports.List = void 0;
//Imports
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Task_1 = require("./Task");
//Create entity
//TODO generate foreign keys and class-validation
var List = /** @class */ (function () {
    function List() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], List.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], List.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], List.prototype, "title", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.lists; }, {
            onDelete: 'CASCADE'
        }),
        __metadata("design:type", User_1.User)
    ], List.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Task_1.Task; }, function (task) { return task.list; }, {
            onDelete: 'CASCADE'
        }),
        __metadata("design:type", Array)
    ], List.prototype, "tasks", void 0);
    List = __decorate([
        typeorm_1.Entity()
    ], List);
    return List;
}());
exports.List = List;
