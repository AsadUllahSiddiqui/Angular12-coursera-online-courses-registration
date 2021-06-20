import { TestBed } from '@angular/core/testing';

import { CoursesToSubcoursesService } from './courses-to-subcourses.service';

describe('CoursesToSubcoursesService', () => {
  let service: CoursesToSubcoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesToSubcoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
