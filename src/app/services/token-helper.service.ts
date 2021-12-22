import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenHelperService {

  IsLoggedIn:boolean;

  constructor() { }

  public setIsLoggedIn(){
    let token=localStorage.getItem('user');
    if(token){
      this.IsLoggedIn=true;
    }
    else{
      this.IsLoggedIn=false;
    }
    
  }

  public getLoginStatus(){
    return this.IsLoggedIn;
  }

  public clearStorageOnLogout(){
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    this.IsLoggedIn=false;
  }
}
