import { PutCommentsService } from "./../../services/put-comments.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.page.html",
  styleUrls: ["./comments.page.scss"]
})
export class CommentsPage implements OnInit {
  data: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    public menuCtrl: MenuController,
    private putCommentsService: PutCommentsService,
    private route: ActivatedRoute
  ) {
    this.menuCtrl.enable(false);
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
    this.data.comments.unshift(com);
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
            this.postComment(data.com);
            console.log("Confirm Ok");
          }
        }
      ]
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
}
