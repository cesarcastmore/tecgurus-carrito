import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

     let params: HttpParams = new HttpParams().append('empresa_id', 1);

    let req= request.clone({
      params: params
    })
  
    return next.handle(req).pipe(
      tap((event)=> {
        if(event instanceof HttpResponse){
         
         
          
        }
      }),
      catchError((error:HttpErrorResponse)=> {
        console.log(error);

        return throwError('Error');
        

      })
    );
  }
}
