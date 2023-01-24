import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any[] | null, texto: string | null): any[] {

    if(value== null){
      return [];
    }

    if(texto === null){
      return value;
    }
    
    let arreglo: any[] = [];
    value.forEach(item => {
      if(item.nombre.indexOf(texto)> -1){
        arreglo.push(item);
      }
    })
    return arreglo;
  }

}
