import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente';
import { CarritoService } from '../services/carrito.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesResolver implements Resolve<Cliente[]> {

  constructor(private carrito: CarritoService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente[]> {
    return this.carrito.getClientes();
  }
}
