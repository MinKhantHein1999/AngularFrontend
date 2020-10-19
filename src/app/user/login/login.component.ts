import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageClass : String;
  message : String;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password : new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
  })


  get Email(){
    return this.loginForm.get('email')
    }

    get Password(){
      return this.loginForm.get('password')
      }

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    if(this.loginForm.valid){
      this.userService.Login(this.loginForm.value).subscribe(data=>{

        if(!data.success){
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
        }
        else{
          console.log(data);
          localStorage.setItem('token' , data.token);
          this.loginForm.reset();
          this.router.navigate(['listing']);
        }
      })
      err=>{
        console.log(err);
      }
    }
  }

}
