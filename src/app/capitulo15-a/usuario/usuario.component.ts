import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() usuario: any;

  constructor() { }

  ngOnInit(): void {
  }

  
  print(){
    console.log("renderice usuario");
  }


}
