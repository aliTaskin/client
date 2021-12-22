import { Component, OnInit } from '@angular/core';
import { TokenHelperService } from '../services/token-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:any;

  constructor(private tokenHelperService:TokenHelperService,private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username')
  }

  logOut(){
    this.tokenHelperService.clearStorageOnLogout();
    
  }

}
