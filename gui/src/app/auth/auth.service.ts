import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;
login(authData: AuthData) {
  this.user = {
    email: authData.email,
    userId: '3'
  };
}

getUser() {
  return{...this.user};
}

isAuth() {
  return this.user != null;
}
constructor() { }

}
