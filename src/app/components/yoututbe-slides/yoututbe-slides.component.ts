import { GetVideosService } from "./../../services/get-videos.service";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-yoututbe-slides",
  templateUrl: "./yoututbe-slides.component.html",
  styleUrls: ["./yoututbe-slides.component.scss"]
})
export class YoututbeSlidesComponent implements OnInit {
  url: any;
  constructor(
    private myService: GetVideosService,
    public sanitizer: DomSanitizer
  ) {
    this.getVideos();
  }

  getVideos() {
    this.myService.getVideos().subscribe(data => {
      console.log(data);
      this.url = data;
      console.log(this.url);
    });
  }

  ngOnInit() {}
}
