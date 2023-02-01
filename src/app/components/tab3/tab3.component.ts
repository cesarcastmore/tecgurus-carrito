import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Tab3Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log("tab 3")
  }

}
