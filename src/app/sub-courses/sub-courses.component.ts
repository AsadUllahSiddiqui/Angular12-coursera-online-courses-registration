import { SubcoursesToDetailService } from './../subcourses-to-detail.service';
import { COURSES } from './../../reg-courses';
import { Course } from './../../course';
import { CourseService } from './../course.service';
import { CoursesToSubcoursesService } from './../courses-to-subcourses.service';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-sub-courses',
  templateUrl: './sub-courses.component.html',
  styleUrls: ['./sub-courses.component.css']
})
export class SubCoursesComponent implements OnInit {
 selectedDetailID!:number;
 selectedCourse!:string;
 courseName!:string;
 allcourses!:Course[];
constructor(public CoursesToSubcoursesService:CoursesToSubcoursesService,
  private CourseService:CourseService,
  private SubcoursesToDetailService:SubcoursesToDetailService,
  private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourses();
    this.courseName=this.ActivatedRoute.snapshot.params.name
    console.log(this.ActivatedRoute.snapshot.params.name)
    this.CoursesToSubcoursesService.namemsg$.subscribe(
      msg=>{this.courseName=msg}
    )
  // this.courseName=this.CoursesToSubcoursesService.getCourseName()
  }
  // get(){
  //   this.courseName=this.CoursesToSubcoursesService.getCourseName()
  // }

  // ngOnChanges():void{
  //   this.courseName=this.CoursesToSubcoursesService.getCourseName()
  // }
  getCourses():void{
    this.CourseService.getCourses().subscribe(courses=>this.allcourses=courses);
  }
  onSelect(detailID:number):void{
    this.selectedDetailID= detailID;
  }
  send(){
    this.SubcoursesToDetailService.sendmasg(this.selectedDetailID);
  }
}
