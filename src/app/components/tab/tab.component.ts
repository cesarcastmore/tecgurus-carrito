import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() show: boolean= false;
  @Input() title: string= '';

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log('render');
  }

}
