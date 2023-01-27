import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt : string = '';
  correo: string='';

  constructor(private http : HttpClient,
    private router: Router, private httpBackend: HttpBackend){ 

  }

  login(username: string, password : string): Observable<any>{

    let httpClient: HttpClient= new HttpClient(this.httpBackend);


    return httpClient.post<any>('https://curso.tgconsulting.online/minipos/api/login', {password:password, username:username})
    .pipe(catchError(this.handleError));

  }

  public handleError(error: any) {

    console.log(error);
  
    return of({ jwt: error.error.text});
  }

  logout(){
  
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  public setJwt(jwt: string){
    localStorage.setItem("jwt", jwt);
    this.jwt= jwt;

  }
  
}
