import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
declare var paypal: any;

@Component({
  selector: "app-pay",
  templateUrl: "./pay.page.html",
  styleUrls: ["./pay.page.scss"]
})
export class PayPage implements OnInit {
  constructor(private alertController: AlertController) {
    this.paymentAlert();
  }

  ngOnInit() {}
  visible = false;
  currency: string = "USD";
  currencyIcon: string = "$";

  paymentAmount = 0.01;

  payPalConfig = {
    env: "sandbox",
    client: {
      sandbox:
        "AQJGZYpsptlCqfwjo-b-IN0YoOusDqDFxMKtZES_0o_ZwRVt0X07gUN2bdyGzvQoj5c3Nzu7qP_Zd-2D"
    },
    commit: false,
    payment: (data, actions) => {
      console.log("data is", data, actions);
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.paymentAmount, currency: "USD" } }
          ]
        }
      });
    }
  };

  payButtonHandler() {
    this.visible = true;
    paypal.Buttons(this.payPalConfig).render("#paypal-button");
  }

  async paymentAlert() {
    const alert = await this.alertController.create({
      header: "Message",

      message: " <br><br> Please Pay to unlock the application",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
