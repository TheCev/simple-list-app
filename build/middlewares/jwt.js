"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var jwt = require("jsonwebtoken");
var checkJwt = function (req, res, next) {
    //obtain token from header
    var bearerToken = req.headers['authorization'];
    var jwtPayload;
    var token = bearerToken.replace('Bearer ', '');
    //if there is'nt token notify
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Not authorization" });
    }
    //verify token, if occur an error notify
    try {
        jwtPayload = jwt.verify(token, "secret");
        res.locals.jwtPayload = jwtPayload;
    }
    catch (e) {
        return res.status(401).json({ message: 'not authorized. If you have logged in, please refresh the page' });
    }
    //obtain data from jwtPayload
    var userId = jwtPayload.userId, username = jwtPayload.username;
    //create newToken for send on the headers the data
    var newToken = jwt.sign({ userId: userId, username: username }, "secret", { expiresIn: '1h' });
    res.setHeader('token', newToken);
    //this is for receive the token header
    res.setHeader('access-control-expose-headers', 'token');
    //call next
    next();
};
exports.checkJwt = checkJwt;
