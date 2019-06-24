import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  email  =  '';
  public  password  =  '';

loginForm: FormGroup;
  constructor(private authService: AuthService) { }

onSubmit(event) {
  event.preventDefault();
  console.log('submit done');
// this.authService.login({
//   email: this.loginForm.value.email,
//   password: this.loginForm.value.password
// });

}

  ngOnInit() {
this.loginForm = new FormGroup({
  email: new FormControl('', {
    validators: [Validators.required, Validators.email]
  }),
  password: new FormControl('', {validators : [Validators.required]})
});

  }

}
