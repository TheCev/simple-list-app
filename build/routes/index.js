"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var express_1 = require("express");
var user_1 = require("./user");
var auth_1 = require("./auth");
var list_1 = require("./list");
var task_1 = require("./task");
//create routes
var routes = express_1.Router();
//routes
routes.use('/users', user_1.default);
routes.use('/auth', auth_1.default);
routes.use('/lists', list_1.default);
routes.use('/tasks', task_1.default);
//export routes
exports.default = routes;
