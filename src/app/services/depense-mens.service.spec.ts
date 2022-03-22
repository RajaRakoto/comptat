import { TestBed } from '@angular/core/testing';

import { DepenseMensService } from './depense-mens.service';

describe('DepenseMensService', () => {
  let service: DepenseMensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepenseMensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
