import { TestBed } from '@angular/core/testing';

import { CakeResolverService } from './cake-resolver.service';

describe('CakeResolverService', () => {
  let service: CakeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
