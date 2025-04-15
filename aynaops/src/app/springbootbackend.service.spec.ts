import { TestBed } from '@angular/core/testing';

import { SpringbootbackendService } from './springbootbackend.service';

describe('SpringbootbackendService', () => {
  let service: SpringbootbackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringbootbackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
