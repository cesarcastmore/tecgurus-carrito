import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let jwt: string=this.auth.jwt;

    let headers: HttpHeaders= new HttpHeaders();
    if(jwt !== ''){
      headers.append('Authorization', 'Bearer '+ this.auth.jwt);
    }
    let params: HttpParams= new HttpParams(); 



    let req = request.clone({
      headers
    })


    return next.handle(req).pipe(
      tap((response: any)=> {

        if(response instanceof HttpResponse){
          console.log(response);
        }


      }), 
      catchError((error: any)=> {
        console.log(error);

        return throwError(error);

      })
    );
  }
}
