import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Tab3Component implements OnInit {

  @Input() data: any;

  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  print(){
    console.log("tab 3")
  }

  update(){
    this.detector.detectChanges();
  }

}
