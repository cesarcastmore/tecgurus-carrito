import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  status: string = '';

  @ViewChild("inputLogin") inputLogin: ElementRef | null = null;


  status$: Observable<string> | undefined;

  subscriptionStatus: Subscription | undefined;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private router: Router, private auth: AuthService) { }


  ngOnInit(): void {

    /*this.subscriptionStatus = this.loginForm.get('username')?.statusChanges.subscribe(value=> {
      this.status= value;
    })*/

    this.status$ = this.loginForm.get('username')?.statusChanges;



  }

  async login(): Promise<any> {

    let result = await this.auth.login(this.loginForm.value.username, this.loginForm.value.password).toPromise();

    if (result.jwt === 'Bad credentials') {

    } else {
      this.auth.setJwt(result.jwt);
      this.auth.correo = this.loginForm.get('username')?.value;
      this.auth.isActive$.next(true);
      localStorage.setItem('correo', this.auth.correo);
      //this.subscriptionStatus?.unsubscribe();
      this.router.navigateByUrl('profile');
    
    }


  }

  ngAfterViewInit(): void {
    fromEvent(this.inputLogin?.nativeElement, 'click').subscribe(() => {
      console.log("Evento");
      this.login().then(() => {

      });
    }
    );
  }

}
