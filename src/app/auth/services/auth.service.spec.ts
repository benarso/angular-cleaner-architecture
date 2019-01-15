import { TestBed } from '@angular/core/testing';

import { MockAuthService } from './mock-auth.service';

describe('MockAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockAuthService = TestBed.get(MockAuthService);
    expect(service).toBeTruthy();
  });
});
