import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  active : boolean = false;
  type: string = '';
  message : string = '';
  constructor() { }

  notify (type:string,message:string){
    this.active = true;
    this.message=message;
    this.type = type;

    setTimeout(()=>{
      this.active=false;
    }, 2000)
  }

}
