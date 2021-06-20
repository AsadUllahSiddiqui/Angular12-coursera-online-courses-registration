import { Injectable } from '@angular/core';
import{Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoursesToSubcoursesService {
 //courseName!:string;
 private name=new Subject<string>();
 namemsg$=this.name.asObservable();

  constructor() { }

  sendmasg(msg:string){
    this.name.next(msg)
  }
  // setCourseName(data: string){
  //  this.courseName=data;
  // }
  // getCourseName(){
  //   return this.courseName;
  // }

}
