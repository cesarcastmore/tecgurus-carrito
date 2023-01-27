import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento2',
  templateUrl: './segmento2.component.html',
  styleUrls: ['./segmento2.component.css']
})
export class Segmento2Component implements OnInit {

  @Input() address: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  
  print(){
    console.log('render', this.address);
  }


}
