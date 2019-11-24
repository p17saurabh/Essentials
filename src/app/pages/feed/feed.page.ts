import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"]
})
export class FeedPage implements OnInit {
  constructor(private router: Router, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
    this.getUserData();
  }

  async getUserData() {
    try {
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(currentUserInfo.attributes["email"]);
      //const favoriteFlavor =
      //currentUserInfo.attributes["custom:favorite_flavor"];
    } catch (err) {
      console.log("error fetching user info: ", err);
    }
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  navigateToUserPage() {
    this.router.navigate(["home/user"]);
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
}
