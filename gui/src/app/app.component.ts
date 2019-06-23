import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dashboard';
  openSidenav = false;

  isAuth = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService) {

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
