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
  //ocurre lo mismo con el cero numerico y con el vacio
  arreglo: string[] = [];


  respuesta: any = {
    name: 'Cesar',
    age: null,
    lista: [],
    address: {
      postal_code: 5423
    }
  }


  igual1: string = '1';
  igual2: any = 1;


  loaded: boolean = false;


  lista: any[] = [{
    name: 'name 1'
  }, {
    name: 'name 2'
  }, {
    name: 'name 3'
  }, {
    name: 'name 4'
  }]



  index: number = 1;

  estilo: any = {
    'font-family': "Arial"
  }

  families: string[] = ['Georgia', 'Arial', 'Verdana', 'Tahoma'];

  color: string = 'red';


  constructor() { }

  ngOnInit(): void {



    if (this.indefinido) {
      console.log("if indefinido");
    } else {
      console.log("else indefinido");
    }

    if (this.nulo) {
      console.log("if nulo");
    } else {
      console.log("else nulo");
    }


    if (this.arreglo.length) {
      console.log("if arreglo");
    } else {
      console.log("else arreglo");
    }

    let age: any = this.respuesta.age;
    if (age) {
      let unir = 'Edad: ' + age;
      console.log(unir);
    }

    if (this.respuesta.first_name) {
      console.log(this.respuesta.first_name);
    }

    if (this.respuesta && this.respuesta.address && this.respuesta.address.postal_code) {
      console.log(this.respuesta.address.postal_code);
    }

    if (this.respuesta?.address?.postal_code) {
      console.log(this.respuesta.address.postal_code);

    }

    if (this.igual1 === '1') {
      alert('Hola');

    }

    setTimeout(() => {
      this.loaded = true;

    }, 2000)



  }

  setFamily(family: string) {
    this.estilo['font-family'] = family;
  }



  changeIdentificador() {

    if (this.identificador == 'one') {
      this.identificador = 'two';
    }


  }

  siguiente() {
    this.index++;
  }




}
