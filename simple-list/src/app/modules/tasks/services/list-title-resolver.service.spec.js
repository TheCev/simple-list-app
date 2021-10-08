"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var list_title_resolver_service_1 = require("./list-title-resolver.service");
describe('ListTitleResolverService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(list_title_resolver_service_1.ListTitleResolverService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
