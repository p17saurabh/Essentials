import { Component, OnInit } from "@angular/core";
import { Auth } from "aws-amplify";
import { Router } from "@angular/router";

@Component({
  selector: "app-signout",
  templateUrl: "./signout.component.html",
  styleUrls: ["./signout.component.scss"]
})
export class SignoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signout() {
    this.router.navigate([""]);
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
