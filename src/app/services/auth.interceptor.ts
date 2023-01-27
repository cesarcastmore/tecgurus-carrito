import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let jwt: string | null=localStorage.getItem('jwt');

    /*if(jwt !== null){
      console.log(jwt)
      headers.set('Authorization', 'Bearer '+ jwt);
    }*/

    let req: any;

    if(jwt !== null){
      let headers: HttpHeaders= new HttpHeaders().append('Authorization', 'Bearer '+ jwt);

       req = request.clone({
        headers: headers
      })
    }else {
       req = request.clone({})
    }
  

    return next.handle(req).pipe(
      tap((response: any)=> {

        if(response instanceof HttpResponse){
          console.log(response);
        }


      }), 
      catchError((error: any)=> {
        
        if(error.status === 401){
          
          this.router.navigateByUrl('login');
          localStorage.clear();

        }
        

        return throwError(error);

      })
    );
  }
}
