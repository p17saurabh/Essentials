import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-index",
  templateUrl: "./index.page.html",
  styleUrls: ["./index.page.scss"]
})
export class IndexPage implements OnInit {
  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, "mainMenu");
  }

  ngOnInit() {}
}
