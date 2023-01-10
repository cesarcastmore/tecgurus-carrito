import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  tabName: string='';

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

}
