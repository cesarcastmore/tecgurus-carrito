import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-capitulo7',
  templateUrl: './capitulo7.component.html',
  styleUrls: ['./capitulo7.component.css']
})
export class Capitulo7Component implements OnInit {

  contador : number = 0;

  isMessage : boolean = false;
  form: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required]),
    precio: new FormControl(0.00)
  });
  constructor(private service:MyServiceService) { }

  ngOnInit(): void {


    this.contador = this.service.contador;
    this.service.contador++;
    this.form.valueChanges.subscribe(item =>{
      if(item.precio > 100 && item.precio < 200){
        this.isMessage= true;
      }else {
        this.isMessage = false;
      }
    })
    this.form.statusChanges.subscribe(value=>{
      console.log(value);
    })

    this.form.get('username')?.statusChanges.subscribe(value=>{
      console.log(value);
    })
  }

  limpiar() {
    this.form.reset();
  }

  login() {
    let sesion: any = this.form.value;
    console.log(sesion.username);
    console.log(sesion.password)

    this.form.disable();
  }

  setDefault() {
    this.form.patchValue({
      username: 'danyska91@gmail.com',
      password: '1234567'
    })
    this.form.get('username')?.setValue('danyska91@gmail.com')
  }

  login2() {
    let sesion: any = this.form.value;
   this.form.get('username')?.disable();
  
  }

}
