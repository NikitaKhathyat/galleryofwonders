import { TestBed } from '@angular/core/testing';

import { Wonder } from './wonder';

describe('Wonder', () => {
  let service: Wonder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wonder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
