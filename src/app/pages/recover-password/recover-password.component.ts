import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  isLong: boolean= false;
  isUpper: boolean= false;


  passwordForm: FormGroup= new FormGroup({
    password: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {

     this.passwordForm.get("password")?.valueChanges.subscribe(value=> {

      if(value.length >= 8){
        this.isLong= true;
      }else {
        this.isLong= false;

      }

      let letter: number  = ['A', 'B', 'C'].findIndex(letter=> value.includes(letter));
      if(letter > -1){

        this.isUpper= true;

      }else {
        this.isUpper= false;

      }

     
    });
  }

}
