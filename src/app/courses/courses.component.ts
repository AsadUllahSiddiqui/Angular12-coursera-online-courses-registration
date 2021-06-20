import { CoursesToSubcoursesService } from './../courses-to-subcourses.service';
import { CourseService } from './../course.service';
import { COURSES } from './../../reg-courses';
import { Course } from './../../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 
  mycourses!:Course[];
  selectedCourse!: string;
  constructor(
    private CourseService :CourseService,
    private CoursesToSubcoursesService:CoursesToSubcoursesService) { }

  ngOnInit(): void {
    this.getCourses();
    
  }
  getCourses():void{
    this.CourseService.getCourses().subscribe(courses=>this.mycourses=courses);
  }
  onSelect(title:string):void{
    this.selectedCourse= title;
    this.CoursesToSubcoursesService.sendmasg(this.selectedCourse);
  }
  send(){
    this.CoursesToSubcoursesService.sendmasg(this.selectedCourse);
  }
}
