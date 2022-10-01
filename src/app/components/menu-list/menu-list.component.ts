import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[]=[{
    title: 'Profile',
    path: 'profile'
  },{
    title:'Products', 
    path: 'products'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
