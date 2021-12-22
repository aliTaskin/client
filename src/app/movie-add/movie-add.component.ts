import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movieAddForm:FormGroup;

  constructor(private httpClient:HttpClient,private toastr:ToastrService) {

   }

  ngOnInit(): void {
    this.initializeMovieAddForm();
  }

  initializeMovieAddForm(){
    const dateTime=new Date();
    this.movieAddForm=new FormGroup({
      title:new FormControl('',[Validators.required]),
      releaseDate:new FormControl('',[Validators.required,]),
      score:new FormControl('',[Validators.required]),
      
    })

  }

  onClickSubmit(){

    if(this.movieAddForm.valid){

      this.httpClient.post('https://localhost:44319/api/movies/',this.movieAddForm.value)
      .subscribe((result)=>{ 
      alert("Movie added") 
      this.ngOnInit();
    },error=>{
      alert("Wrong input format")
    }
    
    )
  
    }
 
  }


}
