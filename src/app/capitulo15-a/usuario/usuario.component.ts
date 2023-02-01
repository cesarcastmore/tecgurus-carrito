import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UsuarioComponent implements OnInit {

  //previus !== actual


  @Input() usuario: any;

  constructor() { }

  ngOnInit(): void {
  }

  
  print(){
    console.log("renderice usuario");
  }


}
