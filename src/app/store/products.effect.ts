import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as indentifiers from './products.constans';
import { delay, map, Observable, mergeMap} from 'rxjs'
import { ProductosService } from '../services/productos.service';
import { Product } from '../models/product';
 
@Injectable()

export class ProductsEffects {


    loadedProducts$= createEffect(()=> 
        this.actions.pipe(
            ofType(indentifiers.LOADING_PRODUCTS),
            mergeMap(state=> {
                return this.getNextAction();
            })
        )
    ) 





    constructor(private actions: Actions, private productService: ProductosService){

    }

    private getNextAction(): Observable<any>{

        return this.productService.getProductos().pipe(
            map((products: Product[])=> {
                return {
                    type: indentifiers.LOADED_PRODUCTS,
                    items: products,
                    message: 'Se ha cargado los productos',
                    success: true
                }
            })
        )




    }
}
