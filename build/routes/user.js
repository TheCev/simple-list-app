"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var express_1 = require("express");
var UserController_1 = require("../controller/UserController");
var jwt_1 = require("../middlewares/jwt");
//create router
var router = express_1.Router();
//Routes
//obtain all users
router.get('/', jwt_1.checkJwt, UserController_1.UserController.getAll);
//create a new user
router.post('/', UserController_1.UserController.newUser);
//obtain a user by id
router.get('/:id', jwt_1.checkJwt, UserController_1.UserController.getById);
//delete user
router.delete('/:id', jwt_1.checkJwt, UserController_1.UserController.deleteUser);
//edit user
router.put('/:id', jwt_1.checkJwt, UserController_1.UserController.editUser);
//export router
exports.default = router;
