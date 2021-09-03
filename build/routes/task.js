"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var express_1 = require("express");
var TaskController_1 = require("../controller/TaskController");
var jwt_1 = require("../middlewares/jwt");
//create router
var router = express_1.Router();
//Routes
//obtain all tasks
router.get('/', jwt_1.checkJwt, TaskController_1.TaskController.getAll);
//obtain a task by id
router.get('/:id', jwt_1.checkJwt, TaskController_1.TaskController.getById);
//create a new list
router.post('/', jwt_1.checkJwt, TaskController_1.TaskController.newTask);
//obtain tasks by listId
router.get('/user/:userId/list/:listId', jwt_1.checkJwt, TaskController_1.TaskController.getByListId);
//delete a task
router.delete('/:id', jwt_1.checkJwt, TaskController_1.TaskController.deleteTask);
//change task state
router.put('/:id/state', jwt_1.checkJwt, TaskController_1.TaskController.changeState);
//export router
exports.default = router;
