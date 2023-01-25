import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  public open$: Subject<any>= new Subject<any>();
  public close$: Subject<boolean>= new Subject<boolean>();

  public putPlugin$: BehaviorSubject<any>= new BehaviorSubject<any>(null);

  constructor() {

   }


   public openPlugin(){
    this.open$.next(true);
   }

   public closePlugin(){
    this.close$.next(true);

   }

   public putPlugin(component : any){
    this.putPlugin$.next(component);
   }
}
