import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dashboard';
  openSidenav = false;
  isShowNav = false;

  isAuth = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {
    if (this.router.url === 'register' || this.router.url === 'login') {
      this.isShowNav = false;
    } else {
      this.isShowNav = true;
    }

  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
}
