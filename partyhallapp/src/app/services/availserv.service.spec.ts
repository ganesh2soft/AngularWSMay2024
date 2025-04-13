import { TestBed } from '@angular/core/testing';

import { AvailservService } from './availserv.service';

describe('AvailservService', () => {
  let service: AvailservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
