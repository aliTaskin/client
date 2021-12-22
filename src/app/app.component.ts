import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { TokenHelperService } from './services/token-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(public tokenHelperService:TokenHelperService){

  }

}
