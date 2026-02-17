import { TestBed } from '@angular/core/testing';

import { Third } from './third';

describe('Third', () => {
  let service: Third;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Third);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
