"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = void 0;
//export method validator, validate if the two passwords fields has the same content
var comparePasswords = function (control) {
    var password = control.get('password');
    var repeatedPassword = control.get('repeatedPassword');
    return password.value === repeatedPassword.value ? null : { notEqual: true };
};
exports.comparePasswords = comparePasswords;
