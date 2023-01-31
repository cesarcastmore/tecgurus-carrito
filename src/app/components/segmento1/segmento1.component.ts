import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento1',
  templateUrl: './segmento1.component.html',
  styleUrls: ['./segmento1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Segmento1Component implements OnInit {

  @Input() usuario: any | undefined;

  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  
  print(){
    console.log('render', this.usuario);
  }


  public update(){
    this.detector.detectChanges();
  }


}
