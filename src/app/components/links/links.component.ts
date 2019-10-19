import { Component, OnInit } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-links",
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.scss"]
})
export class LinksComponent implements OnInit {
  constructor(private iab: InAppBrowser) {}

  ngOnInit() {}
  navigateLinkOne() {
    this.iab.create(
      `https://www.becomingminimalist.com/best-financial-advice/`,
      `_blank`
    );
  }
  navigateLinkTwo() {
    this.iab.create(
      `https://www.themuse.com/advice/50-personal-finance-tips-that-will-change-the-way-you-think-about-money`,
      `_blank`
    );
  }
  navigateLinkThree() {
    this.iab.create(
      `https://money.usnews.com/investing/investing-101/articles/how-to-find-a-financial-advisor-if-youre-not-rich`,
      `_blank`
    );
  }
  navigateLinkFour() {
    this.iab.create(
      `https://www.wsj.com/articles/the-best-financial-advice-i-ever-got-11560737220`,
      `_blank`
    );
  }
}
