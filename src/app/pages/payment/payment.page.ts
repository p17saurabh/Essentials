import { Component, OnInit } from "@angular/core";
import {
  PayPal,
  PayPalPayment,
  PayPalConfiguration
} from "@ionic-native/paypal/ngx";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"]
})
export class PaymentPage implements OnInit {
  constructor(private payPal: PayPal) {}
  ngOnInit() {}
  paymentAmount: string = "3.33";
  currency: string = "USD";
  currencyIcon: string = "$";

  payWithPaypal() {
    console.log("Pay ????");
    this.payPal
      .init({
        PayPalEnvironmentProduction: "",
        PayPalEnvironmentSandbox:
          "AaTpRkawdnxKSIdh4PZ4baljIqdnDjKogD0xRS4eQ91S15zxbBwGQu8ZSvNaNsZYktNbnp9zKROj1g2t"
      })
      .then(
        () => {
          console.log("in prepare to render");
          // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
          this.payPal
            .prepareToRender(
              "PayPalEnvironmentSandbox",
              new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
              })
            )
            .then(
              () => {
                console.log("in paypal payment");
                let payment = new PayPalPayment(
                  this.paymentAmount,
                  this.currency,
                  "Description",
                  "sale"
                );
                this.payPal.renderSinglePaymentUI(payment).then(
                  res => {
                    console.log(res);
                    // Successfully paid

                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                  },
                  () => {
                    console.log("in Error block 1");
                    // Error or render dialog closed without being successful
                  }
                );
              },
              () => {
                console.log("in Error block 2");
                // Error in configuration
              }
            );
        },
        () => {
          console.log("in Error block 3");
          // Error in initialization, maybe PayPal isn't supported or something else
        }
      );
  }
}
