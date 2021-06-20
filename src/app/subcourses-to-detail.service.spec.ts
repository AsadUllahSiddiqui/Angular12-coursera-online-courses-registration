import { TestBed } from '@angular/core/testing';

import { SubcoursesToDetailService } from './subcourses-to-detail.service';

describe('SubcoursesToDetailService', () => {
  let service: SubcoursesToDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcoursesToDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
