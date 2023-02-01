import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient,private auth: AuthService) { }


  public getInventario():Observable<Inventario[]>{

    return this.http.get<Inventario[]>("https://curso.tgconsulting.online/minipos/api/compra/inventario")
   }

}
