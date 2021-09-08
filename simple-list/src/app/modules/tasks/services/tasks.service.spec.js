"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tasks_service_1 = require("./tasks.service");
describe('TasksService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(tasks_service_1.TasksService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
