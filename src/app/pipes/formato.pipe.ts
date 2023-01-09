import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formato'
})
export class FormatoPipe implements PipeTransform {

  transform(texto: string, configuracion: string = ''): string {

    if (configuracion === 'm') {
      return texto.toLowerCase();
    } else if (configuracion === 'M') {
      return texto.toUpperCase();
    }
    return texto;
  }

  
}
