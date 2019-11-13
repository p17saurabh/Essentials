import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage implements OnInit {
  visible: any;
  contactVisible: any;
  constructor(private router: Router) {
    this.visible = true;
    this.contactVisible = true;
  }

  ngOnInit() {}

  show() {
    if (this.visible) {
      this.visible = false;
      this.contactVisible = true;
    } else {
      this.visible = true;
    }
  }

  contactshow() {
    if (this.contactVisible) {
      this.contactVisible = false;
      this.visible = true;
    } else {
      this.contactVisible = true;
    }
  }

  navigatePayment() {
    this.router.navigate(["home/payment"]);
  }

  navigateAboutUs() {
    this.router.navigate(["home/aboutus"]);
  }
}
