import { TestBed } from '@angular/core/testing';

import { ListsResolverService } from './lists-resolver.service';

describe('ListsResolverService', () => {
  let service: ListsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
