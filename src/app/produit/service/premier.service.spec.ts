import { TestBed } from '@angular/core/testing';

import { PremierServiceService } from './premier.service';

describe('PremierServiceService', () => {
  let service: PremierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
