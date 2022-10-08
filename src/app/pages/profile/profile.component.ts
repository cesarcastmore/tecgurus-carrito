import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  tabName: string='setting';
  menuName: string='';

  profile: Profile={
    username: 'ccastillo', 
    email: 'ccastillo@gmail.com',
    password: 'ccastillo',
    fullName: 'Cesar Castillo'
  }
  

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
