import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class PostQuesrionService {
  constructor(public httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,PUT,OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, Content-Type, X-Auth-Token, content-type"
    })
  };

  postQuestion(title: any, question: any) {
    this.httpClient
      .post(
        "https://cors-anywhere.herokuapp.com/https://jogrtcz86g.execute-api.us-east-2.amazonaws.com/dev/postQuestion",
        {
          title: title,
          body: question
        }
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
