import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { Product } from '../models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient, private auth: AuthService) {

   }


   public getProductos():Observable<Product[]> {

    let headers: HttpHeaders= new HttpHeaders().append('Authorization','Bearer '+ this.auth.jwt);
    return this.http.get<Product[]>("https://curso.tgconsulting.online/minipos/api/producto", {headers})
   }

   public getCategorias():Observable<Categoria[]>{

    let headers: HttpHeaders= new HttpHeaders().append('Authorization', 'Bearer '+ this.auth.jwt);
    return this.http.get<Categoria[]>("https://curso.tgconsulting.online/minipos/api/categoria", {headers})
   }


}
