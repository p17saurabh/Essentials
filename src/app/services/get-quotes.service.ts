import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: "root"
})
export class GetQuotesService {
  url =
    "https://cors-anywhere.herokuapp.com/http://35.170.203.135:8080/api/files/all";
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get(this.url)._do(res => console.log(res));
  }
}
