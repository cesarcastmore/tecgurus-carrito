import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { map, Observable, of, timer } from 'rxjs';
import { Alerta } from 'src/app/models/alert';
import { PluginExample2Component } from 'src/app/plugins/plugin-example2/plugin-example2.component';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { PluginsService } from 'src/app/services/plugins.service';
import { AlertState } from 'src/app/store/alert.reducer';
import { LoadingState } from 'src/app/store/loading.reducer';

@Component({
  selector: 'app-tecgurus',
  templateUrl: './tecgurus.component.html',
  styleUrls: ['./tecgurus.component.css']
})
export class TecgurusComponent implements OnInit {


  isOpen: boolean = false;
  title = 'tecgurus-carrito';
  notify$: Observable<Alerta> | undefined;

  alert$: Observable<AlertState> | null= null;

  isLoading$: Observable<boolean>= of(false);

  constructor(public alert: AlertService, private router: Router,
    private auth: AuthService, private pluginService: PluginsService,
    private store: Store<{loading: LoadingState, alert: AlertState}>) {

  }

  ngOnInit(): void {

    this.isLoading$= this.store.select(state=> state.loading).pipe(
      map(state=>  state.isLoading)
    );

    this.alert$ = this.store.select(state=> state.alert);


    let jwt: string = this.auth.jwt;
    let sesion: any = this.parseJwt(jwt);

    if (sesion !== null) {
      console.log("SESION", sesion);

      this.notify$ = this.alert.notify$.asObservable();

      timer(moment(sesion.exp).toDate()).subscribe(() => {
        this.pluginService.openPlugin();
        this.pluginService.putPlugin(PluginExample2Component);


      })
    }



  }


  openMenu() {
    this.isOpen = !this.isOpen;
    //alert("Clic Menu");
  }

  public parseJwt(token: string) {
    try {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    } catch (error) {
      return null;
    }

    return JSON.parse(jsonPayload);
  }

}
