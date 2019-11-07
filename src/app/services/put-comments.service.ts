import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class PutCommentsService {
  constructor(public httpClient: HttpClient) {}

  putComments(id: any, comments: any) {
    this.httpClient
      .put(
        "https://cors-anywhere.herokuapp.com/https://jogrtcz86g.execute-api.us-east-2.amazonaws.com/dev/updateQuestion/" +
          id,
        {
          paramName: "comments",
          paramValue: comments
        }
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
