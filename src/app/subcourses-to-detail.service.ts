import { Injectable } from '@angular/core';
import{Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SubcoursesToDetailService {
  private detailId=new Subject<number>();
  detailIdmsg$=this.detailId.asObservable();
  constructor() { }

  sendmasg(msg:number){
    this.detailId.next(msg)
  }
}
