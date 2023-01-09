import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public contador :  number = 0;
  constructor() { }

  public getNombre(){
    return 'Cesar Castillo';
  }
}
