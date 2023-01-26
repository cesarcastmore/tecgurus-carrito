import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';
import { CarritoLinea } from '../models/carrito-linea';
import { Cliente } from '../models/cliente';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient,private auth: AuthService) {
    
   }

   public getCarritoLineas(): CarritoLinea[]{

    if(localStorage.getItem('carrito-lineas')){
      return JSON.parse(localStorage.getItem('carrito-lineas') ?? '');
    }

    return [];

   }

   public add(linea: CarritoLinea): void {

    let lineas: CarritoLinea[]= this.getCarritoLineas();
    lineas.push(linea);
    localStorage.setItem('carrito-lineas', JSON.stringify(lineas));

   }


   public update(index: number, linea: CarritoLinea){
    let lineas: CarritoLinea[]= this.getCarritoLineas();
    lineas[index]= linea;
    localStorage.setItem('carrito-lineas', JSON.stringify(lineas));
   }


   public delete(index: number){
    let lineas: CarritoLinea[]= this.getCarritoLineas();
    lineas.splice(index, 1);
    localStorage.setItem('carrito-lineas', JSON.stringify(lineas));

   }



   public clear(): void{
    localStorage.removeItem('carrito-lineas');
   }

   public getClientes():Observable<Cliente[]>{

    return this.http.get<Cliente[]>("https://curso.tgconsulting.online/minipos/api/cliente")
   }

   public completarCompra(carrito: Carrito):Observable<any>{

    return this.http.post<any>("https://curso.tgconsulting.online/minipos/api/compra",carrito )
   }

}
