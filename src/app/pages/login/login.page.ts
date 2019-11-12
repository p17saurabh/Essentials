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

  constructor(
    private router: Router,
    public events: Events,
    public amplifyService: AmplifyService
  ) {
    this.authState = { signedIn: false };

    this.amplifyService.authStateChange$.subscribe(authState => {
      console.log(authState.state);
      this.authState.signedIn = authState.state;
      if (this.authState.signedIn === "signedIn") {
        this.router.navigate(["/home/feed"]);
        Auth.currentAuthenticatedUser({
          bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        })
          .then(user => console.log(user))
          .catch(err => console.log(err));
      }
    });
  }

  ngOnInit() {}

  login() {
    console.log("inside login");
    this.router.navigate(["/home/feed"]);
  }
}
