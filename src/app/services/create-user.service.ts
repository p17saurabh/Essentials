import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Auth } from "aws-amplify";

@Injectable({
  providedIn: "root"
})
export class CreateUserService {
  constructor(public httpClient: HttpClient) {}

  postUser(u: any) {
    this.httpClient
      .post(
        "https://cors-anywhere.herokuapp.com/https://vtvdmclq70.execute-api.us-east-2.amazonaws.com/dev/addUser",
        {
          name: u,
          body: u
        }
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
