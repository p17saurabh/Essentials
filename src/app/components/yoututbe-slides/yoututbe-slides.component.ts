import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-yoututbe-slides",
  templateUrl: "./yoututbe-slides.component.html",
  styleUrls: ["./yoututbe-slides.component.scss"]
})
export class YoututbeSlidesComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  url = "https://www.youtube.com/embed/=QNlHeinW1TQ";

  constructor(private domSanitizer: DomSanitizer) {
    this.safeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/c9F5kMUfFKk"
    );
  }

  ngOnInit() {}
}
