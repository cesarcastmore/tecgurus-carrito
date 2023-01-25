import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  public open$: Subject<any>= new Subject<any>();
  public close$: Subject<boolean>= new Subject<boolean>();
  public put$: BehaviorSubject<any | null>= new BehaviorSubject<any | null>(null);

  constructor() {

   }


   public openPlugin(){
    this.open$.next(true);
   }

   public closePlugin(){
    this.close$.next(true);

   }

   public putPlugin(component: any){
    console.log("Hola");
    this.put$.next(component);

   }
}
