import { DETAIL } from './../reg-detail';
import { Detail } from './../detail';
import { Injectable } from '@angular/core';
import {Observable ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  getCourses():Observable<Detail[]>{
    return of(DETAIL);
  }
  constructor() { }
}
