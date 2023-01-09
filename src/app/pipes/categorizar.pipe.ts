import { Pipe, PipeTransform } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Product } from '../models/product';

@Pipe({
  name: 'categorizar'
})
export class CategorizarPipe implements PipeTransform {

  transform(productos: Product[], categoria: Categoria | null): Product[] {

    if(!categoria ){
      return productos;
    }


    let productFilter: Product[]=[];

    for(let product of productos){
      if(product.categoria.idcategoria ===  categoria.idcategoria){
        productFilter.push(product);
      }
    }
    return productFilter;
  }

}
