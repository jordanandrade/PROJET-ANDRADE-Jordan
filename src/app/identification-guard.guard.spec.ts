import { TestBed } from '@angular/core/testing';

import { IdentificationGuardGuard } from './identification-guard.guard';

describe('IdentificationGuardGuard', () => {
  let guard: IdentificationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdentificationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
