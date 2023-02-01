import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { Product } from '../models/product';
import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient, private auth: AuthService, 
    private db: DatabaseService<Product>) {

   }


   public getProductos():Observable<Product[]> {

    return this.http.get<Product[]>("https://curso.tgconsulting.online/minipos/api/producto")
   }

   public getCategorias():Observable<Categoria[]>{

    return this.http.get<Categoria[]>("https://curso.tgconsulting.online/minipos/api/categoria")
   }


   save():Observable<Product>{

    return this.db.save();

  

   }


}
