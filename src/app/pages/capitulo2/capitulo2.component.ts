import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitulo2',
  templateUrl: './capitulo2.component.html',
  styleUrls: ['./capitulo2.component.css']
})
export class Capitulo2Component implements OnInit {

  name: string='Tecgurus';
  name2='Tecgurus2';

  numero1=1;
  numero2='1';

  active: boolean=false;

  numero: number=3;
  name3: any =3;

  name4: string='';

  names1: string[]= ['1', '2', '3'];
  names2: Array<string>= ['1', '2', '3'];

  type: string='text';

  message: string='Hola Mundo';


  constructor() { }

  ngOnInit(): void {
  }


  sumar(): number {
    return 1+1;
  }
  
  sumar2(para: number): number {
     let dato: number=10;
    return this.numero+dato + para;
  }

  onClick(event: any): void {

    alert("Hice click");

  }

  cambio(event: any): void {
    console.log(event.target.value);
  }


  changeText(message: string){
    this.message= message;
  }
}
