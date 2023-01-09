import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitulo4',
  templateUrl: './capitulo4.component.html',
  styleUrls: ['./capitulo4.component.css']
})
export class Capitulo4Component implements OnInit {

  identificador: string = 'one';

  indefinido: undefined;
  nulo: null = null;

  loaded: boolean = false;

  arreglo: string[] = [];

  lista: any[] = [{
    name: 'Name 1'
  }, {
    name: 'Name 2'
  }, {
    name: 'Name 3'
  }, {
    name: 'Name 4'
  }];

  index: number = 1;

  estilo: any = {
    'font-family': 'Arial'
  }
  families: string[] = ['Georgia', 'Arial', 'Verdana', 'Tahoma'];

  constructor() { }

  ngOnInit(): void {

    if (this.indefinido) {
      console.log("if indefinido")
    } else {
      console.log("else")
    }

    if (this.nulo) {
      console.log("if nulo")
    } else {
      console.log("else nulo")
    }

    if (this.nulo) {
      console.log("if nulo")
    } else {
      console.log("else nulo")
    }

    if (this.arreglo.length) {
      console.log("if arreglo")
    } else {
      console.log("else arreglo")
    }

    setTimeout(() => {
      this.loaded = true;
    }, 2000)



  }


  changeIdentificador() {

    if (this.identificador == 'one') {
      this.identificador = 'two';
    }


  }

  siguiente() {
    this.index++;
  }

  setFamily(family: string) {
    this.estilo['font-family'] = family;
  }

}
