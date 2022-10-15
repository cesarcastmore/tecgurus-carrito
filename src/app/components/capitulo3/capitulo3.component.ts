import { Component, OnInit } from '@angular/core';
import { Honda } from '../../models/honda';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-capitulo3',
  templateUrl: './capitulo3.component.html',
  styleUrls: ['./capitulo3.component.css']
})
export class Capitulo3Component implements OnInit {

  auto: Honda = new Honda();

  elefante: Animal = {
    nombre: 'Elefante',
    come: 'hierbas'
  }

  nombre: string = this.elefante.nombre + ' come ' + this.elefante.come;

  arreglo: number[]= [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void { 
    this.iterator();   

  }

  iterator():void{
    for(let i=0; i<this.arreglo.length; i++){
      console.log(this.arreglo[i])
    }

    this.arreglo.forEach((item: number)=> console.log(item));

    let numero: number | undefined= this.arreglo.find((item: number)=> item===2);

    for(let item of this.arreglo){
      console.log(item)
    }

    for(let key in this.elefante){
      console.log(key)
    }
    
  }

}
