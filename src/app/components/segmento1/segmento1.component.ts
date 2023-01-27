import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento1',
  templateUrl: './segmento1.component.html',
  styleUrls: ['./segmento1.component.css'],

})
export class Segmento1Component implements OnInit {

  @Input() usuario: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  
  print(){
    console.log('render', this.usuario);
  }


}
