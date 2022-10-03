import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  // loginForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router) {

   }

  ngOnInit(): void 
  {
  
  }

  loginForm=new FormGroup({
    name:new FormControl('', [Validators.required, Validators.pattern("Admin")]),
    password:new FormControl('', [Validators.required, Validators.pattern("Admin@123")])
  })
  //loginMethod 
  logIn()
  {

    alert("Hurray!!! Welcome to Dashboard")
    this.router.navigate(['flight'])
   
  }
 

  get name()
  {
    return this.loginForm.get('name')
  }
  get password()
  {
    return this.loginForm.get('password')
  }

}
