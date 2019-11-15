import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { Auth } from "aws-amplify";

@Injectable({
  providedIn: "root"
})
export class GetUserService {
  u: any;
  myUser: any;
  url =
    "https://cors-anywhere.herokuapp.com/https://vtvdmclq70.execute-api.us-east-2.amazonaws.com/dev/getUser/";

  constructor(private http: HttpClient) {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => (this.u = user.username))
      .catch(err => console.log(err));
  }

  getUser(u: any) {
    console.log("user is : " + u);
    return this.http.get(this.url + u)._do(res => console.log(res));
  }
}
