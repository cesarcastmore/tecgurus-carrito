import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { ProductosService } from '../services/productos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoResolver implements Resolve<Product | undefined> {

  constructor(private productoService: ProductosService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product | undefined> {

    let productoId: string  | null= route.paramMap.get('id')




    return this.productoService.getProductos().pipe(
      map((productos: Product[])=> {

        return productos.find((prod: Product)=>{
          return prod.idproducto === Number(productoId)
        })


      })
    )

  }
}
