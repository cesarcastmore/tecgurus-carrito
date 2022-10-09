import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitulo4',
  templateUrl: './capitulo4.component.html',
  styleUrls: ['./capitulo4.component.css']
})
export class Capitulo4Component implements OnInit {

  identificador: string='one';

  constructor() { }

  ngOnInit(): void {
  }


  changeIdentificador(){

    if(this.identificador== 'one'){
      this.identificador='two';
    }


  }



}
