import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLockGuard implements CanActivate {

  constructor(private router: Router,
    private auth: AuthService){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      let condicion: boolean= true;

      if(condicion){
        this.router.navigateByUrl('');
      }

      return true;



  }
  
}
