import { TestBed } from '@angular/core/testing';

import { CableService } from './cable.service';

describe('CableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CableService = TestBed.get(CableService);
    expect(service).toBeTruthy();
  });
});
