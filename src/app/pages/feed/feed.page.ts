import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"]
})
export class FeedPage implements OnInit {
  constructor(private router: Router, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  navigateToUserPage() {
    this.router.navigate(["home/user"]);
  }
}
