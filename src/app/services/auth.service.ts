import { Injectable } from '@angular/core';
import { User } from '../Types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersArray : User[] =[]
 constructor (){}
  addUser(body : User){
    const username = body.username
    const email = body.email
    const password = body.password
    const user : User = {
      email : email,
      password : password,
      username : username
    }
    const keys = Object.keys(localStorage)
    let i= keys.length
    if(this.usersArray[0]==null)
    {
      while(i--)
      {
       this.usersArray[i]=JSON.parse(localStorage.getItem(keys[i]) || '[]') 
      }
    }
    console.log(this.usersArray)
    this.usersArray.push(user)
    console.log(this.usersArray)
    localStorage.setItem(`user ${this.usersArray.length-1}`,JSON.stringify(this.usersArray[this.usersArray.length-1]))
  }
  checkUser (body : User) : Boolean
  {
    let checked = false
    this.fillArray()
    for(let i=0; i<this.usersArray.length;i++)
    {
       if(body.username == this.usersArray[i].username && body.password==this.usersArray[i].password){
        checked = true
       }
       
    }
    return checked
  }
   fillArray()
  {
    const keys = Object.keys(localStorage)
    let i= keys.length
    if(this.usersArray[0]==null)
    {
      while(i--)
      {
       this.usersArray[i]=JSON.parse(localStorage.getItem(keys[i]) || '[]') 
      }
    }
  }
}
