import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}  from '@angular/forms'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  LoginModel:FormGroup;
  constructor() { 

    this.LoginModel=new FormGroup({

      username: new FormControl('', [Validators.required]),
      password: new FormControl(''),


    })

  }

  

}
