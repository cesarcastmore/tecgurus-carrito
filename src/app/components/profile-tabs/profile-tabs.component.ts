import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent implements OnInit {

  @Output() onTab: EventEmitter<string> = new EventEmitter<string>();

  tabs: any[] = [{
    tittle: "Setting", value: "setting"
  }, {
    tittle: "Address", value: "address"
  }, {
    tittle: "Orders", value: "orders"
  }];
  constructor() { }

  ngOnInit(): void {
  }

  tab(identifier: string) {
    this.onTab.emit(identifier);
  }

  pressTab(name: string){
    this.onTab.emit(name);
  }

}
