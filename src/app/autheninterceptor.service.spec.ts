import { TestBed } from '@angular/core/testing';

import { AutheninterceptorService } from './autheninterceptor.service';

describe('AutheninterceptorService', () => {
  let service: AutheninterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheninterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
