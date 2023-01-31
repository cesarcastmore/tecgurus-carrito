import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento2',
  templateUrl: './segmento2.component.html',
  styleUrls: ['./segmento2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Segmento2Component implements OnInit {

  @Input() address: any | undefined;

  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  
  print(){
    console.log('render', this.address);
  }
  public update(){


    this.detector.detectChanges();

    setTimeout(()=> {
      this.address.name= 'Hola';

    }, 5000)
  }


}
