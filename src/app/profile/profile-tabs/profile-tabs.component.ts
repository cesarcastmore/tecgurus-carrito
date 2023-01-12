import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent implements OnInit {

  @Output() onTab: EventEmitter<string> = new EventEmitter<string>();

  tabs: any[] = [{
    tittle: "Setting", value: "settings"
  }, {
    tittle: "Address", value: "address"
  }, {
    tittle: "Orders", value: "orders"
  }];

  @Input() settingTemplate: TemplateRef<any> | null = null;
  @Input() addressTemplate: TemplateRef<any> | null = null;
  @Input() ordersTemplate: TemplateRef<any> | null = null;

  currentTab: string= 'settings';

  constructor() { }

  ngOnInit(): void {
  }

  tab(identifier: string) {
    this.onTab.emit(identifier);
  }

  pressTab(name: string){

    this.currentTab= name;
    this.onTab.emit(name);
  }

}
