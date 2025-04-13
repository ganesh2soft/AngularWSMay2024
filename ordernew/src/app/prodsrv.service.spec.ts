import { TestBed } from '@angular/core/testing';

import { ProdsrvService } from './prodsrv.service';

describe('ProdsrvService', () => {
  let service: ProdsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
