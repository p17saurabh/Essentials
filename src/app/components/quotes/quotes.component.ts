import { Component, OnInit } from "@angular/core";
import { GetQuotesService } from "../../services/get-quotes.service";
@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.scss"]
})
export class QuotesComponent implements OnInit {
  url: any;
  constructor(private myService: GetQuotesService) {
    this.getImg();
  }

  getImg() {
    this.myService.getImages().subscribe(data => {
      console.log(data);
      this.url = data;
      console.log(this.url);
    });
  }
  ngOnInit() {}
}
