import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: "root"
})
export class GetVideosService {
  url =
    "https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/getAllContent";
  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get(this.url)._do(res => console.log(res));
  }
}
