import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  verified = true;
  constructor( public restApi: RestApiService) { }
  User: any;
  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    return this.restApi.getUser("5d418136694d144200fe2909").subscribe((data : any) => {
      this.User = data.data.user;
    console.log("USERDETAILS" ,  this.User);
    })
  }
}
