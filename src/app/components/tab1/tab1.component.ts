import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab1Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log("tab1")
  }

}
