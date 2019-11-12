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
  size: any;
  constructor(
    private alertController: AlertController,
    private postQuesrionService: PostQuesrionService,
    private getQuestionsService: GetQuestionsService,
    private router: Router,
    public navCtrl: NavController
  ) {
    this.getQuestions();
  }

  getQuestions() {
    this.getQuestionsService.getQuestions().subscribe(data => {
      console.log(data);
      this.questions = data;
      var keys = Object.keys(this.questions);
      this.size = keys.length;
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
            console.log(JSON.stringify(data));
            this.postQuestion(data.title, data.question);
            console.log("Confirm Ok");
          }
        }
      ]
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
