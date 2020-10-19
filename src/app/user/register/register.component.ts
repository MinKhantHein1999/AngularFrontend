import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messageClass : String;
  message : String;

  constructor(private userService : UserService, private router : Router) { }

  registerForm = new FormGroup({
    name : new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password : new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
    confirmpass : new FormControl('',[Validators.required]),
  },this.passwordMatchValidator);

    passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmpass').value
       ? null : {'mismatch': true};
 }


  get Username(){
    return this.registerForm.get('name')
    }

  get Email(){
    return this.registerForm.get('email')
    }

    get Password(){
      return this.registerForm.get('password')
      }

      get Confirmpass(){
        return this.registerForm.get('confirmpass')
        }

  ngOnInit(): void {
  }

  userRegister(){
    if(this.registerForm.valid){
      this.userService.Register(this.registerForm.value).subscribe(data=>{

        if(!data.success){
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
        }
        else{
          // this.messageClass = "alert alert-warning"
          // this.message = data.message;
          console.log(data)
          this.registerForm.reset();
          this.router.navigate(['user/login'])
        }
      })
    }
  }

}
