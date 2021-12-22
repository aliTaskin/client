import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenHelperService } from '../services/token-helper.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenHelperService:TokenHelperService,private router:Router){

  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.tokenHelperService.getLoginStatus()){
      return true;
    }
    else{
      this.tokenHelperService.setIsLoggedIn();
      this.router.navigate(['']);
      return false;
    }
    
  }
  
}
