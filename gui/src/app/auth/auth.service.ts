import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authChange = new Subject<boolean>();
  private user: User;
login(authData: AuthData) {
  this.user = {
    email: authData.email,
    userId: '3'
  };
  this.authChange.next(true);

}

logout() {
  this.user = null;
  this.authChange.next(false);

}

// tslint:disable-next-line: one-line
registerUser(authData: AuthData){
this.user = {
  email: authData.email,
  userId: Math.round(Math.random() * 10000).toString()
};
this.authChange.next(true);
}

getUser() {
  return{...this.user};
}

isAuth() {
  return this.user != null;
}
constructor() { }

}
