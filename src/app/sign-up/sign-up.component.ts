import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  title:string='Signup Component is Worked';

  signUpModel:FormGroup;
  constructor() { 

      this.signUpModel=new FormGroup({

          
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}))$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
      mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
      gender: new FormControl('male', [Validators.required]),
      date: new FormControl(new Date())


      })

  }

  

}
