import { GetQuestionsTitleService } from "./../../services/get-questions-title.service";
import { GetUserQuestionsService } from "./../../services/get-user-questions.service";
import { GetQuestionsService } from "./../../services/get-questions.service";
import { PostQuesrionService } from "./../../services/post-quesrion.service";
import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { Title } from "@angular/platform-browser";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.page.html",
  styleUrls: ["./messages.page.scss"]
})
export class MessagesPage implements OnInit {
  questions: any;
  hidden = false;
  size: any;
  constructor(
    private alertController: AlertController,
    private postQuesrionService: PostQuesrionService,
    private getQuestionsService: GetQuestionsService,
    private router: Router,
    public navCtrl: NavController,
    private getUserQuestionsService: GetUserQuestionsService,
    private getQuestionsTitleService: GetQuestionsTitleService
  ) {
    this.getQuestions();
  }

  getQuestions() {
    this.getQuestionsService.getQuestions().subscribe(data => {
      console.log(data);
      this.questions = data;
      var keys = Object.keys(this.questions);
      this.size = keys.length;
      this.hidden = true;
      console.log(this.questions);
    });
  }

  getUserQuestions() {
    this.presentRefreshAlert();
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

  ngOnInit() {}

  writeComment() {
    this.presentAlertPrompt();
  }

  postQuestion(title: any, body: any) {
    this.postQuesrionService.postQuestion(title, body);
    console.log(title);
    console.log(body);
  }

  searchQuestion(title: any) {
    this.getQuestionsTitleService.getUserQuestions(title).subscribe(data => {
      console.log(data);
      this.questions = data;
      var keys = Object.keys(this.questions);
      this.size = keys.length;
      console.log(this.questions);
    });
  }

  search() {
    this.presentSearchPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: "Ask Your Question!",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Title"
        },
        {
          name: "question",
          type: "text",

          value: "",
          placeholder: "Your Question"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: data => {
            console.log(JSON.stringify(data.title));
            if (
              data == null ||
              data == undefined ||
              data.title == null ||
              data.title == undefined ||
              data.title.length == 0 ||
              data.question == null ||
              data.question == undefined ||
              data.question.length == 0
            ) {
              this.presentInvalidQuestionAlert();
            } else {
              this.postQuestion(data.title, data.question);
            }

            console.log("Confirm Ok");
          }
        }
      ]
    });

    await alert.present();
  }

  async presentSearchPrompt() {
    const alert = await this.alertController.create({
      header: "Search Question!",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Title"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: data => {
            console.log(JSON.stringify(data));
            if (data.title.length > 0) {
              this.searchQuestion(data.title);
            }

            console.log("Confirm Ok");
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInvalidQuestionAlert() {
    const alert = await this.alertController.create({
      header: "Blank Entry",
      message: " <br><br> Please enter question Title and the actual question",
      buttons: ["OK"]
    });

    await alert.present();
  }

  async presentRefreshAlert() {
    const alert = await this.alertController.create({
      header: "Info",
      message: " <br><br> Refresh to view all questions",
      buttons: ["OK"]
    });

    await alert.present();
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
  ionViewDidEnter() {
    console.log("ion view ");
  }

  doRefresh(event) {
    console.log("Begin async operation");
    this.getQuestions();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
}
