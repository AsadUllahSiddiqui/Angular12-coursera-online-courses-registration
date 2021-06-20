import { TeacherService } from './../teacher.service';
import { TEACHER } from './../../reg-teacher';
import { Teacher } from './../../teacher';
import { DetailService } from './../detail.service';
import { DETAIL } from './../../reg-detail';
import { Detail } from './../../detail';
import { SubcoursesToDetailService } from './../subcourses-to-detail.service';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  alltopics!:string[];
  teacher_courses!:string[];
  count:number=5;
  detailID!:number;
  price!:number;
  title!:string;
  rating!:string;
  alldetails!:Detail[];
  allteachers!:Teacher[];
  constructor(private SubcoursesToDetailService:SubcoursesToDetailService,
    private DetailService:DetailService,
    private TeacherService:TeacherService,
    private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourses();
    this.getTeacher();
    this.detailID=(this.ActivatedRoute.snapshot.params.id)
    this.detailID=this.detailID-1;
    this.title=(this.ActivatedRoute.snapshot.params.title)
    this.rating=(this.ActivatedRoute.snapshot.params.rating)
    this.price=(this.ActivatedRoute.snapshot.params.price)
    this.alltopics=this.alldetails[this.detailID].topics
    this.teacher_courses=this.allteachers[this.detailID].mycourses
    console.log(this.ActivatedRoute.snapshot.params.id)
    console.log(this.ActivatedRoute.snapshot.params.title)
    console.log(this.ActivatedRoute.snapshot.params.rating)
    console.log(this.ActivatedRoute.snapshot.params.price)
    // this.SubcoursesToDetailService.detailIdmsg$.subscribe(
    //   msg=>{this.detailID=msg});
    }

    getCourses():void{
      this.DetailService.getCourses().subscribe(details=>this.alldetails=details);
    }
    getTeacher():void{
    this.TeacherService.getCourses().subscribe(teacher=>this.allteachers=teacher);
    }
}
