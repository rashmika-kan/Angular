import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  username:string;
  password:string;
  strength:string;
  login:boolean=false;
  successMessage:string="Could not Login";

  constructor() { }

  ngOnInit(): void {
  }
  onLogin():string{
    if(this.login){
      if(this.password.length>10){
        this.strength="strong"
      }
      else if(this.password.length>=6 && this.password.length<=10)
      {this.strength="moderate"}
      else{this.strength="weak"}
     this.successMessage="Hi "+this.username+"! Your password is " +this.strength+"." ;
     return this.successMessage;
    }

  }

}
