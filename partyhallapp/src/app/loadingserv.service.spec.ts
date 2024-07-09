import { TestBed } from '@angular/core/testing';

import { LoadingservService } from './loadingserv.service';

describe('LoadingservService', () => {
  let service: LoadingservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
