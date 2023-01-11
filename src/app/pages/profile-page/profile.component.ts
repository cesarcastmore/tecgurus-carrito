import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { AlertService } from 'src/app/services/alert.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  simpleButtonTitle: string='Cambiar Avatar';


  tabName: string='';
  menuName: string='';

  profile: Profile={
    username: 'ccastillo', 
    email: 'ccastillo@gmail.com',
    password: 'ccastillo',
    fullName: 'Cesar Castillo'
  }
  
  estilo : any = {
    display : 'none'
  }

  constructor(private alert:AlertService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.alert.notify('success','Se ha cargado la informacion del perfil')
    },500)
    
  }

  selectTab(identifier: string){
    console.log(identifier);
    this.tabName= identifier;
    this.estilo.display= 'block'
    setTimeout(()=>{
      this.estilo.display = 'none'
    }, 2000)
  }

  selectMenu(identifier: string){
    console.log(identifier);

    this.router.navigateByUrl('profile/' + identifier.toLowerCase());


    this.menuName= identifier;
  }

  changeAvatar(){
    alert("Hola");
  }
 

}
