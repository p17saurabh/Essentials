import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  pages = [
    {
      title: "Quotes Library",
      url: "quotes"
    },
    {
      title: "Recommended Videos",
      url: "videos"
    },
    {
      title: "Important Links",
      url: "links"
    },
    {
      title: "Credit Calculator",
      url: "credit"
    }
  ];

  selectedPath = "";
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {}
}
