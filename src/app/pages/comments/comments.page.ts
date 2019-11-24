import { PutCommentsService } from "./../../services/put-comments.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { MenuController } from "@ionic/angular";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.page.html",
  styleUrls: ["./comments.page.scss"]
})
export class CommentsPage implements OnInit {
  data: any;
  u: any;
  constructor(
    private router: Router,
    private alertController: AlertController,
    public menuCtrl: MenuController,
    private putCommentsService: PutCommentsService,
    private route: ActivatedRoute
  ) {
    this.menuCtrl.enable(false);
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => (this.u = user.username))
      .catch(err => console.log(err));
  }

  ngOnInit() {
    //this.data = this.router.getCurrentNavigation().extras.state;
    //console.log("comments" + this.data.title);

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
    this.menuCtrl.enable(false);
  }

  ionViewDidEnter() {}

  postComment(com: any) {
    let comm = { comment: com, user: this.u };
    this.data.comments.unshift(comm);
    console.log(this.data);
    this.putCommentsService.putComments(this.data.id, this.data.comments);
  }

  comment() {
    this.presentAlertPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: "Add Your Comment!",
      inputs: [
        {
          name: "com",
          type: "text",
          placeholder: "Add your comment"
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
            if (
              data == null ||
              data == undefined ||
              data.com == null ||
              data.com == undefined ||
              data.com.length == 0
            ) {
              this.presentInvalidComment();
            } else {
              this.postComment(data.com);
            }
            console.log("Confirm Ok");
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInvalidComment() {
    const alert = await this.alertController.create({
      header: "Blank Entry",
      message: " <br><br> Comment cannot be empty",
      buttons: ["OK"]
    });

    await alert.present();
  }

  doRefresh(event) {
    console.log("Begin async operation");

    console.log(this.data.comments);
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
  navigateToMsgPage() {
    this.router.navigate(["home/messages"]);
  }
}
