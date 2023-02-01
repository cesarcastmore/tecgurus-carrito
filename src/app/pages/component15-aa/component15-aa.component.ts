import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component15-aa',
  templateUrl: './component15-aa.component.html',
  styleUrls: ['./component15-aa.component.css']
})
export class Component15AaComponent implements OnInit {

  public option: any = {
    selected: 1,
    tab1: {
      data: {}
    }, tab2: {
      data: {}
    },
    tab3: {
      data: {}
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


  show(selected: number){
    this.option.selected= selected;
    if(selected === 1){
      this.option.tab1 = {... this.option.tab1, data: {title: 'Tab 1'}}
    } else  if(selected === 2){
      this.option.tab2 = {... this.option.tab1, data: {title: 'Tab 2'}}
    }  else if(selected === 3){
      this.option.tab3 = {... this.option.tab1, data: {title: 'Tab 3'}}
    }

  }

}
