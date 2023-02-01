import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { DireccionComponent } from './direccion/direccion.component';
import { UsuarioComponent } from './usuario/usuario.component';

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

  @ViewChild(DireccionComponent) direccionComponent: DireccionComponent | null= null;
  @ViewChild(UsuarioComponent) usuarioComponent: UsuarioComponent | null= null;

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


    this.formItem.get('calle')?.valueChanges
    .pipe(
      debounceTime(1000)
    ).subscribe((calle: any)=> {
      this.direccion.calle = calle;
      //this.direccion= {...this.direccion, calle: calle}
      this.direccionComponent?.update();
    })

    this.formItem.get('nombre')?.valueChanges.subscribe((nombre: any)=> {
      this.usuario.nombre = nombre;
      this.usuarioComponent?.update();
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
