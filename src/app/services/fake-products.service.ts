import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeProduct } from '../models/fake-product';

@Injectable({
  providedIn: 'root'
})
export class FakeProductsService {

  constructor(private http:HttpClient) { }

  public getProductById(id:string): Observable<any>{

    return this.http.get<FakeProduct>('https://fakestoreapi.com/products/'+id);

  }
}
