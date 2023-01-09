import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tecgurus',
  templateUrl: './tecgurus.component.html',
  styleUrls: ['./tecgurus.component.css']
})
export class TecgurusComponent implements OnInit {


  isOpen : boolean = false;
  title = 'tecgurus-carrito';

  constructor(public alert:AlertService, private router: Router, 
    private auth: AuthService){

  }

  ngOnInit(): void {

    if(!localStorage.getItem("jwt")){
      this.router.navigateByUrl('login')
    }else {
      this.auth.setJwt(localStorage.getItem('jwt') ?? '');
      this.auth.correo= localStorage.getItem('correo') ?? ''
    }
    
  }


  openMenu(){
    this.isOpen = !this.isOpen;
    //alert("Clic Menu");
  }

}
