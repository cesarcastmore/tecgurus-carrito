import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  tabName: string='';
  menuName: string='';
  

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(identifier: string){
    console.log(identifier);
    this.tabName= identifier;
  }

  selectMenu(identifier: string){
    console.log(identifier);
    this.menuName= identifier;
  }

}
