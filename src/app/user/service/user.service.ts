import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_Url = "https://radiant-anchorage-40000.herokuapp.com/api/user"
  constructor(private http$ : HttpClient, private router : Router) { }

  Register(user){
    return this.http$.post<any>(`${this.base_Url}/register`,user);
  }


  Login(user) {
    return this.http$.post<any>(`${this.base_Url}/login`, user);
  }

  LogOut(){
    localStorage.removeItem('token')
    this.router.navigate(['listing'])
  }

  LoggedIn(){
    return !!localStorage.getItem('token');
  }
}
