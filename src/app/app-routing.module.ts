import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component'
import {AuthGuard} from './guards/auth.guard'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'movieAdd',component:MovieAddComponent,canActivate:[AuthGuard]},
  {path:'movieList',component:MovieListComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
