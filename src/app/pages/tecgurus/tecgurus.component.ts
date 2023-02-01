import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { PluginsService } from 'src/app/services/plugins.service';
import { PluginExample2Component } from 'src/app/plugins/plugin-example2/plugin-example2.component';
import { Store } from '@ngrx/store';
import { LoadingState} from '../../store/loading.reducer';
import { closeLoading} from '../../store/loading.action';
import { AlertState } from 'src/app/store/alert.reducer';

@Component({
  selector: 'app-tecgurus',
  templateUrl: './tecgurus.component.html',
  styleUrls: ['./tecgurus.component.css']
})
export class TecgurusComponent implements OnInit {


  isOpen : boolean = false;
  title = 'tecgurus-carrito';

  isLoading$: Observable<boolean > = of(true);

  constructor(public alert:AlertService, private router: Router, 
    private auth: AuthService, private pluginService: PluginsService,
    private store$: Store<{ loading: LoadingState, alert: AlertState }>){

  }

  ngOnInit(): void {

    this.isLoading$ = this.store$.select(state=> state.loading.isLoading);
    
    /*setTimeout(()=> {

        this.store$.dispatch(closeLoading());
      
    }, 4000)*/
    
  }


  openMenu(){
    this.isOpen = !this.isOpen;
    //alert("Clic Menu");
  }

}
