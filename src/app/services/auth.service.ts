import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { catchError, Observable, of, Subject, timer } from 'rxjs';
import { PluginExample2Component } from '../plugins/plugin-example2/plugin-example2.component';
import { PluginsService } from './plugins.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt: string = '';
  correo: string = '';

  isActive$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient,
    private router: Router, private pluginService: PluginsService,
    private backend: HttpBackend) {

  }

  login(username: string, password: string): Observable<any> {
    let http = this.backend;
    return this.http.post<any>('https://curso.tgconsulting.online/minipos/api/login', { password: password, username: username })
      .pipe(catchError(this.handleError));

  }

  public handleError(error: any) {

    return of({ jwt: error.error.text });
  }

  logout() {

    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  public setJwt(jwt: string) {
    localStorage.setItem("jwt", jwt);
    this.jwt = jwt;
    let objectJwt = this.parseJwt(this.jwt);
    if (objectJwt != null) {
      let date = moment(this.parseJwt(this.jwt).exp);

      timer(date.toDate()).subscribe(() => {
        this.pluginService.openPlugin();
        this.pluginService.putPlugin(PluginExample2Component);
      })
    }


  }

  public parseJwt(token: string) {

    try {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch (err) {

    }

    return null;
  }
}
