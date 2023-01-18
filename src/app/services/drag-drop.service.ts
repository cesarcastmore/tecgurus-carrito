import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CarritoService } from './carrito.service';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  public producto: Product | null= null ;

  constructor(private carrito: CarritoService) {

   }

  public add(producto: Product ) {
    this.producto= producto;
   
  }

  
  drop() {
    if ( this.producto) {
      this.carrito.add({
        costo:  this.producto.precio,
        cantidad: 1,
        producto:  this.producto,
        idcompraproducto: Math.random()

      })

      this.producto= null;
    }

  }

}
