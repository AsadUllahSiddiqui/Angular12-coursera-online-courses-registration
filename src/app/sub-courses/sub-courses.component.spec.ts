import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCoursesComponent } from './sub-courses.component';

describe('SubCoursesComponent', () => {
  let component: SubCoursesComponent;
  let fixture: ComponentFixture<SubCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
