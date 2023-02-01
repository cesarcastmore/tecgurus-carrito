import { Component, OnInit, ViewChild } from '@angular/core';
import { Tab1Component } from 'src/app/components/tab1/tab1.component';
import { Tab2Component } from 'src/app/components/tab2/tab2.component';
import { Tab3Component } from 'src/app/components/tab3/tab3.component';

@Component({
  selector: 'app-component15-aa',
  templateUrl: './component15-aa.component.html',
  styleUrls: ['./component15-aa.component.css']
})
export class Component15AaComponent implements OnInit {

  @ViewChild(Tab3Component) tab3Component: Tab3Component | null= null;
  @ViewChild(Tab2Component) tab2Component: Tab2Component | null= null;
  @ViewChild(Tab1Component) tab1Component: Tab1Component | null= null;

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
      //this.option.tab1 = {... this.option.tab1, data: {title: 'Tab 1'}}
      this.option.tab1.data =  {title: 'Tab 1'};
      this.tab1Component?.update();
    } else  if(selected === 2){
      //this.option.tab2 = {... this.option.tab1, data: {title: 'Tab 2'}}
      this.option.tab2.data =  {title: 'Tab 2'};
      this.tab2Component?.update();

    }  else if(selected === 3){
      //this.option.tab3 = {... this.option.tab1, data: {title: 'Tab 3'}}
      this.option.tab3.data =  {title: 'Tab 3'};
      this.tab3Component?.update();

    }

  }

}
