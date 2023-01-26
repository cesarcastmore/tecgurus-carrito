import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoginGuard implements CanActivate {

  constructor(private router: Router,
    private auth: AuthService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (!localStorage.getItem("jwt")) {

        return true;
       
      } else {
        this.auth.setJwt(localStorage.getItem('jwt') ?? '');
        this.auth.correo = localStorage.getItem('correo') ?? '';
        this.router.navigateByUrl('profile');

        return false;
      }

  }
  
}
