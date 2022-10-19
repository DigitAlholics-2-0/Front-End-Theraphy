import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  logged: boolean =false;
  currentUser!: User;


  constructor(private formBuilder: FormBuilder, private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submitted() {
    this.logged=true;
  }


  loginForm: FormGroup = this.formBuilder.group({
    email: ['', { validators: [Validators.required], updateOn: 'change'}],
    password: ['', {validators: [Validators.required ], updateOn: 'change'}]
  })

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password')
  }

  submitForm(){
    this.usersService.getAll1().subscribe(response=>{
      const user = response.find((a: any)=> {
        this.currentUser = a;
        return a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
      });

      if(user) {
        this.loginForm.reset();
        if(this.currentUser.type == "patient")
          this.router.navigate(['home'])
        else
          this.router.navigate(['home2'])
      } else {
        alert("Incorrect email or password. Please try again.")
      }
    })
  }


}
