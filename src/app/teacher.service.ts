import { TEACHER } from './../reg-teacher';
import { Teacher } from './../teacher';
import { Injectable } from '@angular/core';
import {Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  getCourses():Observable<Teacher[]>{
    return of(TEACHER);}
  constructor() { }
}
