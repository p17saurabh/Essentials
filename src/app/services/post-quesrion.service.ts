import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Auth } from "aws-amplify";

@Injectable({
  providedIn: "root"
})
export class PostQuesrionService {
  u: any;
  constructor(public httpClient: HttpClient) {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => (this.u = user.username))
      .catch(err => console.log(err));
  }

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
          body: question,
          user: this.u
        }
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
