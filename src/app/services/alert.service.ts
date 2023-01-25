import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { Alerta } from '../models/alert';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  notify$: Subject<Alerta> = new Subject<Alerta>();

  active: boolean = false;
  type: string = '';
  message: string = '';
  constructor() { }

  /*notify (type:string,message:string){
    this.active = true;
    this.message=message;
    this.type = type;

    setTimeout(()=>{
      this.active=false;
    }, 2000)
  }*/

  notify(type: string, message: string) {
    this.notify$.next({
      type,
      message,
      active: true
    });

    timer(moment().add(3, 'seconds').toDate()).subscribe(()=> {
      this.notify$.next({
        type: '',
        message: '',
        active: false
      });
    })


  }

}
