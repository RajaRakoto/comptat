import { TestBed } from '@angular/core/testing';

import { DepenseArchService } from './depense-arch.service';

describe('DepenseArchService', () => {
  let service: DepenseArchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepenseArchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
