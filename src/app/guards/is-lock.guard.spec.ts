import { TestBed } from '@angular/core/testing';

import { IsLockGuard } from './is-lock.guard';

describe('IsLockGuard', () => {
  let guard: IsLockGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLockGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
