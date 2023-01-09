import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private  router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(result=>{
      this.auth.setJwt(result.jwt);
      this.auth.correo = this.loginForm.get('username')?.value;
      localStorage.setItem('correo', this.auth.correo);
      this.router.navigateByUrl('profile');
  
    },
    result=>{
      console.log("2")
    });
  }

}
