import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  public open$: Subject<any>= new Subject<any>();
  public close$: Subject<boolean>= new Subject<boolean>();

  constructor() {

   }


   public openPlugin(){
    this.open$.next(true);
   }

   public closePlugin(){
    this.close$.next(true);

   }
}
