import { TestBed } from '@angular/core/testing';

import { RevenuService } from './revenu.service';

describe('RevenuService', () => {
  let service: RevenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
