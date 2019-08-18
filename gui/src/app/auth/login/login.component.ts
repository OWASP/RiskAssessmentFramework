import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { HomeComponent } from 'src/app/view/home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  loginForm: FormGroup;
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.registerForm.get('username').value == 'admin' && this.registerForm.get('password').value == 'test1234') {
      console.log('Successful login');
      this.authService.login();
      this.router.navigate(['home']);

    } else {
      console.log("invalid login");
    }

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });

  }

}
