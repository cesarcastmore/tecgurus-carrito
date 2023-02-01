import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Tab2Component implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log("tab 2")
  }
}
