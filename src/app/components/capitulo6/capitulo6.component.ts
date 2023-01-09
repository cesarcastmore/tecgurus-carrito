import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitulo6',
  templateUrl: './capitulo6.component.html',
  styleUrls: ['./capitulo6.component.css']
})
export class Capitulo6Component implements OnInit {

  numerico: number = 12.039374552646;
  numerico2: number = 153423344.0393745526462435345435435;

  fecha1 : string = '2022-10-22 10:53'
  fecha2 : Date = new Date;

  usuario :  any ={
    name : 'Cesar',
    age: 33
  }
  constructor() { }

  ngOnInit(): void {
  }

}
