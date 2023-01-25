import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsVendedorGuard implements CanActivate {
  
  constructor(private router: Router, private auth: AuthService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  | boolean{

      if(!localStorage.getItem("jwt")){
        this.router.navigateByUrl('login')
      }else {
        this.auth.setJwt(localStorage.getItem('jwt') ?? '');
        let cadena
        this.auth.correo= localStorage.getItem('correo') ?? '';
        if(this.auth.correo=== 'vendedor@tecgurus.net'){

          return true;
        }

        this.router.navigateByUrl('profile')

        return false;
      }
  
      return false;
    return true;
  }
  
}
