import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
// import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public message: Message[] = [];
  public user = 'admin';

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  Login() {
    if (this.loginForm.value.email == 'fingent' && this.loginForm.value.password == 'fingent') {
      localStorage.setItem('SeesionUser', this.user)
      this.router.navigateByUrl("/dashboard");
    }
    else {
      this.message = [{ severity: 'error', summary: 'Login:', detail: 'Incorrect username or password' }];
    }
  }


}
