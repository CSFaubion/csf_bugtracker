import { TestBed } from '@angular/core/testing';

import { XhrIntercepterService } from './xhr-intercepter.service';

describe('XhrIntercepterService', () => {
  let service: XhrIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XhrIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
