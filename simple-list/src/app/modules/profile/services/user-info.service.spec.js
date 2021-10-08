"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var user_info_service_1 = require("./user-info.service");
describe('UserInfoService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(user_info_service_1.UserInfoService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
