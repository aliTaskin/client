import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:any;
  movieSearchForm:any;
  formMovieName:any;
  errorMessage:any

  async searchMovies(){
    var query='https://www.omdbapi.com/'
    +'?s='+this.movieSearchForm.get('title').value    
    +'&page='+this.movieSearchForm.get('page').value
    +'&y='+this.movieSearchForm.get('releaseDate').value
    +'&type='+this.movieSearchForm.get('type').value
    +'&apikey=cc730752'
    
    await this.httpClient.get(query).toPromise().then(response =>{
      
      this.movies=response;
      this.errorMessage=null;

      if(this.movies.Response=='False'){
        this.errorMessage=this.movies.Error;   
      }
      
    });
  }

  initializeMovieAddForm(){
    
    this.movieSearchForm=new FormGroup({
      title:new FormControl('',[]),
      releaseDate:new FormControl('',[]),
      page:new FormControl('',[]),
      type:new FormControl('',[])
      
      
    })

  }

  constructor(private httpClient:HttpClient) {
    this.movies=new Array<any>();
   }

  ngOnInit(): void {
    // this.movies=this.getMovies();
    this.initializeMovieAddForm();
    
  }

}
