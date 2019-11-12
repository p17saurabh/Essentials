import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
@Injectable({
  providedIn: "root"
})
export class GetQuestionsTitleService {
  url =
    "https://cors-anywhere.herokuapp.com/https://jogrtcz86g.execute-api.us-east-2.amazonaws.com/dev/getQuestionsTitle/";

  constructor(private http: HttpClient) {}

  getUserQuestions(title: any) {
    return this.http.get(this.url + title)._do(res => console.log(res));
  }
}
