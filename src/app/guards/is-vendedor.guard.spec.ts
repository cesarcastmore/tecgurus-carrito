import { TestBed } from '@angular/core/testing';

import { IsVendedorGuard } from './is-vendedor.guard';

describe('IsVendedorGuard', () => {
  let guard: IsVendedorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsVendedorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
