import { GetUserService } from "./../../services/get-user.service";
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
  hidden = true;
  trialDays: number;
  constructor(
    private router: Router,
    private getUserQuestionsService: GetUserQuestionsService,
    private getUserService: GetUserService
  ) {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => (this.user = user.username))
      .then(u => this.getDaysLeft())
      .catch(err => console.log(err));
  }

  ngOnInit() {}

  getUserQuestions() {
    this.hidden = false;
    this.getUserQuestionsService.getUserQuestions().subscribe(data => {
      console.log(data);
      this.questions = data;
      var keys = Object.keys(this.questions);
      this.size = keys.length;
      this.hidden = true;
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

  getDaysLeft() {
    this.getUserService.getUser(this.user).subscribe(data => {
      var d = new Date();
      var date = new Date(data[0].createdAt);
      var diff = d.getTime() - date.getTime();
      var Difference_In_Days = diff / (1000 * 3600 * 24);
      var trial_days = 30 - Difference_In_Days;
      this.trialDays = Math.floor(trial_days);
      console.log("Trail days left " + trial_days);
    });
  }
}
