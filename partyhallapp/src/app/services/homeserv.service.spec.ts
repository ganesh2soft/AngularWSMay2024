import { TestBed } from '@angular/core/testing';

import { HomeservService } from './homeserv.service';

describe('HomeservService', () => {
  let service: HomeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
