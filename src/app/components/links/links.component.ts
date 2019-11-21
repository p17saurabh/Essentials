import { GetUrlsService } from "./../../services/get-urls.service";
import { Component, OnInit } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-links",
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.scss"]
})
export class LinksComponent implements OnInit {
  data: any;
  constructor(
    private iab: InAppBrowser,
    private getUrlsService: GetUrlsService
  ) {
    this.getURL();
  }

  ngOnInit() {}
  navigateLink(url: any) {
    this.iab.create(url, `_blank`);
  }

  getURL() {
    this.getUrlsService.getUrls().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(this.data);
    });
  }
}
