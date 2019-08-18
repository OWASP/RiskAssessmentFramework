import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  verified = true;
  constructor(public restApi: RestApiService) { }
  User: User = {
    userId: "123",
    username: "test1",
    email: "test@test1.com",
    password: "password",
    isVerified: false,
    country: "wakanda",
    field: "N/A"
  };
  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    return this.restApi.getUser("5d544b025efa2644347284ba").subscribe((data: any) => {
      this.User = data.data.user;
    })
  }
}
