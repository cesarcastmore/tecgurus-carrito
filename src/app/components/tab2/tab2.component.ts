import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Tab2Component implements OnInit {
  @Input() data: any;

  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  print(){
    console.log("tab 2")
  }

  update(){
    this.detector.detectChanges();
  }

}
