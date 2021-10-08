"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tasks_resolver_service_1 = require("./tasks-resolver.service");
describe('TasksResolverService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(tasks_resolver_service_1.TasksResolverService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
