import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { PluginsService } from 'src/app/services/plugins.service';
import { PluginExample2Component } from 'src/app/plugins/plugin-example2/plugin-example2.component';

@Component({
  selector: 'app-tecgurus',
  templateUrl: './tecgurus.component.html',
  styleUrls: ['./tecgurus.component.css']
})
export class TecgurusComponent implements OnInit {


  isOpen : boolean = false;
  title = 'tecgurus-carrito';

  constructor(public alert:AlertService, private router: Router, 
    private auth: AuthService, private pluginService: PluginsService){

  }

  ngOnInit(): void {


 
    
  }


  openMenu(){
    this.isOpen = !this.isOpen;
    //alert("Clic Menu");
  }

}
