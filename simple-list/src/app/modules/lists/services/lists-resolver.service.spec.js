"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var lists_resolver_service_1 = require("./lists-resolver.service");
describe('ListsResolverService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(lists_resolver_service_1.ListsResolverService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
