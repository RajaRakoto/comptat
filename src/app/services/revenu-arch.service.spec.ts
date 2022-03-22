import { TestBed } from '@angular/core/testing';

import { RevenuArchService } from './revenu-arch.service';

describe('RevenuArchService', () => {
  let service: RevenuArchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevenuArchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
