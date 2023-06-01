import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Types/user';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user !:User
  msg : string =''
  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })
  constructor(public nav: NavbarService, public router : Router, private authService : AuthService){}

   ngOnInit(){
  this.nav.hide()
   }
   onLogin(){
    // const userJson = localStorage.getItem('user')!
    // this.user = JSON.parse(userJson)
    // if(this.user.username== this.loginForm.controls['username'].value && this.user.password == this.loginForm.controls['password'].value)
    // {
    //   console.log('logged in')
    //   this.router.navigate(['home'])
    // }
    // console.log(this.user)
    
    const user : User = {
      username : this.loginForm.controls['username'].value || '{}',
      password : this.loginForm.controls['password'].value || '{}',
      email : ''
    }
    if(this.authService.checkUser(user))
    {
      console.log('logged in')
      this.router.navigate(['home'])
    }else{
       this.msg = 'invalid user name and password '
    }
   }

  
  //  goingToSignUp()
  //  {
  //   localStorage.removeItem('user')
  //  }

}
