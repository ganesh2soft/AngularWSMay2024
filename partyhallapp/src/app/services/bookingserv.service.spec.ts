import { TestBed } from '@angular/core/testing';

import { BookingservService } from './bookingserv.service';

describe('BookingservService', () => {
  let service: BookingservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
