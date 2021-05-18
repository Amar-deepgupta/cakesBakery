import { TestBed } from '@angular/core/testing';

import { StopguardService } from './stopguard.service';

describe('StopguardService', () => {
  let service: StopguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StopguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
