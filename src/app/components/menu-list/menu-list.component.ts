import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[]=[{
    title: 'Profile',
    path: 'profile'
  },{
    title:'Products', 
    path: 'products'
  },{
    title:'Carrito', 
    path: 'carrito'
  },{
    title:'Inventario', 
    path: 'inventario'
  }]

  constructor(private auth: AuthService) {

   }

  ngOnInit(): void {

    if(this.auth.correo === 'contacto@tecgurus.net'){
      let index = this.menus.findIndex(menu=> menu.path==='inventario')
      this.menus.splice(index, 1);
    } 
  }


  closeSesion(){
    this.auth.logout();
  }

}
