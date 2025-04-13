import { TestBed } from '@angular/core/testing';

import { PartyhallservService } from './partyhallserv.service';

describe('PartyhallservService', () => {
  let service: PartyhallservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyhallservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
