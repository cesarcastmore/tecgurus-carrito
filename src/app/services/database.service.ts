import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService<T extends Entity> {

  constructor(private httpClient: HttpClient) {

   }


   public save(): Observable<T> {
    return of()
   }

   public update(): Observable<T> {
    return of()
   }

   public delete(): Observable<T> {
    return of()
   }


   public get(): Observable<T[]> {
    return of([])
   }


}


export interface Entity {
  id: number;
}