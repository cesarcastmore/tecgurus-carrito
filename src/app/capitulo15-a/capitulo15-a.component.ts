import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-capitulo15-a',
  templateUrl: './capitulo15-a.component.html',
  styleUrls: ['./capitulo15-a.component.css']
})
export class Capitulo15AComponent implements OnInit {

  formItem: FormGroup= new FormGroup({
    nombre: new FormControl(),
    calle: new FormControl()
  })

  direccion: any={
    calle: ''
  }

  usuario: any= {
    nombre: ''
  }

  constructor() {

   }

  ngOnInit(): void {

    let a1: string= 'a';
    let b1: string= a1;
    this.sonIguales(a1, b1);

    let a2: any = {
      name: 'cesar'
    }
    let b2: any= a2;
    this.sonIguales(a2, b2);




    let a3: any = {
      name: 'cesar'
    }
    let b3: any= a3;
    b3.name='carlos';
    this.sonIguales(a3, b3);





    let a4: any = {
      name: 'cesar'
    }
    let b4: any= JSON.parse(JSON.stringify(a4));
    b4.name='carlos';
    this.sonIguales(a4, b4);


    this.formItem.get('calle')?.valueChanges.subscribe((calle: any)=> {
      this.direccion = {...this.direccion, calle: calle};

    })

    this.formItem.get('nombre')?.valueChanges.subscribe((nombre: any)=> {

      this.usuario ={...this.usuario, nombre: nombre};

    })



  }


  public sonIguales(a: any, b: any){

    if(a !== b){
      console.log("no son iguales");
    }else {
      console.log("son iguales");
    }


  }

}
