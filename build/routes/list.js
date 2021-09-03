"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var express_1 = require("express");
var ListController_1 = require("../controller/ListController");
var jwt_1 = require("../middlewares/jwt");
//create router
var router = express_1.Router();
//Routes
//obtain all lists
router.get('/', jwt_1.checkJwt, ListController_1.ListController.getAll);
//obtain lists by userId
router.get('/user/:userId', jwt_1.checkJwt, ListController_1.ListController.getByUserId);
//create a new list
router.post('/', jwt_1.checkJwt, ListController_1.ListController.newList);
//obtain a list by id
router.get('/:id', jwt_1.checkJwt, ListController_1.ListController.getById);
//delete a list
router.delete('/:id', jwt_1.checkJwt, ListController_1.ListController.deleteList);
//edit a list
router.put('/:id', jwt_1.checkJwt, ListController_1.ListController.editList);
//export router
exports.default = router;
