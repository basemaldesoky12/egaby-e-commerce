import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Types/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor (public router : Router, private authService : AuthService){}

  // usersArray : User[] =[]
 signUpForm =  new FormGroup({
  username : new FormControl(''),
  email : new FormControl(''),
  password : new FormControl(''),
 })
 ngOnInit(): void {
   
 }
 onSubmit(){ 
  
  const username = this.signUpForm.controls['username'].value !
  const email = this.signUpForm.controls['email'].value !
  const password = this.signUpForm.controls['password'].value !
  const user : User = {
    email : email,
    password : password,
    username : username
  }
  this.authService.addUser(user)
  this.router.navigate([''])
 }
}
