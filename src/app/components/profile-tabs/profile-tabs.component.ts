import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tab } from 'src/app/models/tab';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent implements OnInit {

  @Output() onTab: EventEmitter<string> = new EventEmitter<string>();

  tabs: Tab[] = [{
    title: 'Settings',
    key: 'setting'
  }, {
    title: 'Addresses',
    key: 'addresses'
  }, {
    title: 'Orders',
    key: 'orders'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  openTab(identifier: string) {
    this.onTab.emit(identifier);
  }

}
