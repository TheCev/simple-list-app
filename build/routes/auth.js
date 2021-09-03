"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var express_1 = require("express");
var AuthController_1 = require("../controller/AuthController");
var jwt_1 = require("../middlewares/jwt");
//create router
var router = express_1.Router();
//Routes
router.post('/login', AuthController_1.AuthController.login);
router.get('/', jwt_1.checkJwt, function (req, res) {
    return res.send(200).json({ message: 'OK' });
});
//export router
exports.default = router;
