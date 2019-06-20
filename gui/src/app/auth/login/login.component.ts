import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  email  =  '';
  public  password  =  '';


  constructor(private authService: AuthService) { }

onSubmit() {
// this.authService.login({
//   email: this.loginForm.value.email,
//   password: this.loginForm.value.password
// });
}

  ngOnInit() {
  }

}
