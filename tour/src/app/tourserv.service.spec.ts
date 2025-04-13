import { TestBed } from '@angular/core/testing';

import { TourservService } from './tourserv.service';

describe('TourservService', () => {
  let service: TourservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
