import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Auth } from "aws-amplify";
import { GetUserQuestionsService } from "./../../services/get-user-questions.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.page.html",
  styleUrls: ["./user.page.scss"]
})
export class UserPage implements OnInit {
  user: any;
  questions: any;
  size: any;
  constructor(
    private router: Router,
    private getUserQuestionsService: GetUserQuestionsService
  ) {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => (this.user = user.username))
      .catch(err => console.log(err));
  }

  ngOnInit() {}

  getUserQuestions() {
    this.getUserQuestionsService.getUserQuestions().subscribe(data => {
      console.log(data);
      this.questions = data;
      var keys = Object.keys(this.questions);
      this.size = keys.length;
      console.log(this.questions);
    });
  }

  getComments(item: any) {
    console.log(item);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };

    this.router.navigate(["home/comments"], navigationExtras);
  }

  navigateToFeedPage() {
    this.router.navigate(["home/feed"]);
  }
}
