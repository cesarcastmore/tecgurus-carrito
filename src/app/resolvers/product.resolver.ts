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
export class ProductResolver implements Resolve<Product | null> {

  constructor(private productService: ProductosService){

  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product | null> {

    let id: number = Number(route.paramMap.get('id') ?? '0');
    let productos$: Observable<Product[]> =  this.productService.getProductos();
    let producto$ : Observable<Product | null> = productos$.pipe(
      map((productos: Product[])=> {

        let product: Product | undefined = productos.find(product=> product.idproducto === id);

        if(!product){
          return null;
        }else {
          return product;
        }

      })
    )

    return producto$;
  }
}
