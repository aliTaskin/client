import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenHelperService } from '../services/token-helper.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  IsLoggedIn:boolean;
  errorMessage:any;


  constructor(private httpClient:HttpClient,private router:Router,private tokenHelperService:TokenHelperService) { 

  }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(){
    
    this.loginForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]), 
    })

  }

  login(){
    if(this.loginForm.valid){
      this.httpClient.post('https://localhost:44319/api/users/login/',this.loginForm.value)
      .subscribe((result)=>{ 
        var user=result;
        if(user!=null){
          localStorage.setItem('user',JSON.stringify(user));
          localStorage.setItem('username',this.loginForm.get('username').value);
          
          this.tokenHelperService.setIsLoggedIn();
          this.router.navigate(['/home']);
        }
    },error=>{
      this.errorMessage="Username or Password is wrong";
    });
    
    }

  

  }

}
