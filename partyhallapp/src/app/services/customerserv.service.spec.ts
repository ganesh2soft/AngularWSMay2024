import { TestBed } from '@angular/core/testing';

import { CustomerservService } from './customerserv.service';

describe('CustomerservService', () => {
  let service: CustomerservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
