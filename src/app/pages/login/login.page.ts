import { CreateUserService } from "./../../services/create-user.service";
import { GetUserService } from "./../../services/get-user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Events } from "@ionic/angular";
import { AmplifyService } from "aws-amplify-angular";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  authState: any;
  u: any;
  constructor(
    private router: Router,
    public events: Events,
    public amplifyService: AmplifyService,
    public getUserService: GetUserService,
    private createUserService: CreateUserService
  ) {
    this.authState = { signedIn: false };

    this.amplifyService.authStateChange$.subscribe(authState => {
      console.log(authState.state);
      this.authState.signedIn = authState.state;
      if (this.authState.signedIn === "signedIn") {
        this.getUser();
        this.router.navigate(["/home/feed"]);
      }
    });
  }

  getUser() {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => (this.u = user.username))
      .then(u => this.registerUser(u))
      .catch(err => console.log(err));
  }
  registerUser(u: any) {
    this.getUserService.getUser(u).subscribe(data => {
      if (Object.keys(data).length === 0) {
        console.log("creating new user" + u);
        this.createUserService.postUser(u);
      } else {
        console.log("user data : " + data);
      }
    });
  }
  ngOnInit() {}

  login() {
    // console.log("inside login");
    // this.router.navigate(['/home/feed']);
    const url =
      "https://essentialslogind581c2f9-d581c2f9-dev.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=6d2rskgig3i2hse4ta1fmbvp0r&redirect_uri=http://localhost:8100/home/feed/";
    window.location.assign(url);
  }
}
