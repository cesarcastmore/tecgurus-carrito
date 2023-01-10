import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  menuName: string='';



  constructor(private alert:AlertService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.alert.notify('success','Se ha cargado la informacion del perfil')
    },500)
    
  }

 

  selectMenu(identifier: string){

    this.router.navigateByUrl('profile/' + identifier.toLowerCase());
    this.menuName= identifier;
  }

 

}
