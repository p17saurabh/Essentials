import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormsModule, Validators } from "@angular/forms";
import { Chart } from "chart.js";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-credit",
  templateUrl: "./credit.component.html",
  styleUrls: ["./credit.component.scss"]
})
export class CreditComponent implements OnInit {
  @ViewChild("doughnutCanvas", { static: false }) doughnutCanvas: ElementRef;
  doughnutChart: any;
  paymentHistory: any;
  utilizationRate: any;
  ageOfCredit: any;
  typeOfCredit: any;
  hardInquires: any;
  totalPayment: any;
  latePayments: any;
  creditLimit: any;
  creditCardBalance: any;
  totalPoints: any;
  visible = true;
  hideCredit = true;
  labelVisible = true;
  labelVisible1 = true;
  options: any;
  msg: any;
  msg1: any;
  msg2: any;
  msg3: any;
  hideButton = false;
  showErrorTotal = true;
  showErrorLate = true;
  showErrorGreater = true;
  showErrorNoTotal = true;
  amsg: any;
  amsg1: any;
  amsg2: any;
  amsg3: any;

  ashowErrorTotal = true;
  ashowErrorLate = true;
  ashowErrorGreater = true;
  ashowErrorNoTotal = true;
  constructor(private alertController: AlertController) {
    this.options = {
      responsive: true,

      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 11
        }
      }
    };
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  calculateCredit() {
    this.visible = true;
  }
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Payment History",
          "Points lost PH",
          "Utilization Rate",
          "Points lost UR",
          "Age of Credit",
          "Points lost AoC",
          "Type of credits",
          "Points lost ToC",
          "#of hard inquires",
          "Points lost HI"
        ],
        datasets: [
          {
            label: "# of Credit points",
            data: [50, 0, 7, 0, 20, 0, 10, 0, 5, 0],
            backgroundColor: [
              "rgba(0,0,255,1)",
              "rgba(0,0,255,0.5)",
              "rgba(0,128,0,1)",
              "rgba(0,128,0,0.5)",
              "rgba(128,0,0,1)",
              "rgba(128,0,0,0.5)",
              "rgba(255,0,255,1)",
              "rgba(255,0,255,0.5)",
              "rgba(255,199,15,1)",
              "rgba(253,225,123,1)"
            ],
            hoverBackgroundColor: [
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3",
              "#D3D3D3"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          }
        ]
      },
      options: this.options
    });
  }

  changetodoTotalPayment() {
    if (this.totalPayment < 0) {
      this.showErrorTotal = false;
      this.msg = "Total payment cannot be negative";
      this.hideButton = true;
    } else {
      this.showErrorTotal = true;
      this.hideButton = false;
    }

    if (
      this.showErrorNoTotal === false ||
      this.showErrorLate === false ||
      this.showErrorGreater === false
    ) {
      this.hideButton = true;
    }
  }

  changetodoLate() {
    if (
      typeof this.totalPayment === "undefined" ||
      this.totalPayment === null
    ) {
      this.msg3 = "Please Enter total payments";
      this.showErrorNoTotal = false;
      this.hideButton = true;
    } else {
      this.showErrorNoTotal = true;
      this.hideButton = false;
    }

    if (this.latePayments < 0) {
      this.showErrorLate = false;
      this.msg1 = "Late payment cannot be negative";
      this.hideButton = true;
    } else {
      this.showErrorLate = true;
      this.hideButton = false;
    }

    if (this.latePayments > this.totalPayment && this.showErrorNoTotal) {
      this.msg2 = "Late payment cannot be greater than TP";
      this.showErrorGreater = false;
      this.hideButton = true;
    } else {
      this.showErrorGreater = true;
      this.hideButton = false;
    }

    if (
      this.showErrorNoTotal === false ||
      this.showErrorLate === false ||
      this.showErrorGreater === false
    ) {
      this.hideButton = true;
    }
  }

  //

  achangetodoTotalPayment() {
    if (this.creditLimit < 0) {
      this.ashowErrorTotal = false;
      this.amsg = "Credit limit cannot be negative";
      this.hideButton = true;
    } else {
      this.ashowErrorTotal = true;
      this.hideButton = false;
    }

    if (
      this.ashowErrorNoTotal === false ||
      this.ashowErrorLate === false ||
      this.ashowErrorGreater === false
    ) {
      this.hideButton = true;
    }
  }

  achangetodoLate() {
    if (typeof this.creditLimit === "undefined" || this.creditLimit === null) {
      this.amsg3 = "Please Enter the Credit Limit";
      this.ashowErrorNoTotal = false;
      this.hideButton = true;
    } else {
      this.ashowErrorNoTotal = true;
      this.hideButton = false;
    }

    if (this.creditCardBalance < 0) {
      this.ashowErrorLate = false;
      this.amsg1 = "End a positive value";
      this.hideButton = true;
    } else {
      this.ashowErrorLate = true;
      this.hideButton = false;
    }

    if (this.creditCardBalance > this.creditLimit && this.ashowErrorNoTotal) {
      this.amsg2 = "You cannot owe more than your CL";
      this.ashowErrorGreater = false;
      this.hideButton = true;
    } else {
      this.ashowErrorGreater = true;
      this.hideButton = false;
    }

    if (
      this.ashowErrorNoTotal === false ||
      this.ashowErrorLate === false ||
      this.ashowErrorGreater === false
    ) {
      this.hideButton = true;
    }
  }

  updateChart() {
    this.visible = false;
    this.paymentHistory =
      ((this.totalPayment - this.latePayments) / this.totalPayment) *
      850 *
      0.35;

    this.utilizationRate =
      ((this.creditLimit - this.creditCardBalance) / this.creditLimit) *
      850 *
      0.3;
    this.doughnutChart.data.datasets[0].data[0] = Math.round(
      this.paymentHistory
    );
    this.doughnutChart.data.datasets[0].data[1] = Math.round(
      295.5 - this.paymentHistory
    );
    this.doughnutChart.data.datasets[0].data[2] = Math.round(
      this.utilizationRate
    );
    this.doughnutChart.data.datasets[0].data[3] = Math.round(
      255 - this.utilizationRate
    );
    this.doughnutChart.data.datasets[0].data[4] = Math.round(
      parseInt(this.ageOfCredit)
    );
    this.doughnutChart.data.datasets[0].data[5] = Math.round(
      127.5 - parseInt(this.ageOfCredit)
    );
    this.doughnutChart.data.datasets[0].data[6] = Math.round(
      parseInt(this.typeOfCredit)
    );
    this.doughnutChart.data.datasets[0].data[7] = Math.round(
      85 - parseInt(this.typeOfCredit)
    );
    this.doughnutChart.data.datasets[0].data[8] = Math.round(
      parseInt(this.hardInquires)
    );
    this.doughnutChart.data.datasets[0].data[9] = Math.round(
      85 - parseInt(this.hardInquires)
    );
    this.totalPoints =
      this.paymentHistory +
      this.utilizationRate +
      parseInt(this.ageOfCredit) +
      parseInt(this.typeOfCredit) +
      parseInt(this.hardInquires);

    this.doughnutChart.update();
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Your Credit score",

      message:
        "Your credit score is " +
        Math.round(this.totalPoints) +
        " out of 850." +
        "<br><br>" +
        this.score(this.totalPoints) +
        " <br><br> Scroll for detailed break down!!",
      buttons: ["OK"]
    });

    await alert.present();
  }

  labelClick() {
    this.labelVisible = false;
  }
  labelClick1() {
    this.labelVisible1 = false;
  }

  score(totalPoints: any) {
    const totalPoint = parseInt(totalPoints);
    console.log(typeof totalPoint);
    console.log(totalPoint);
    if (totalPoint > 800) {
      return "<h3> Your score is good </h3>";
    }
    if (totalPoint < 800 && totalPoint > 600) {
      return "<h3> Your score is average </h3>";
    }
    return "<h3> Your score is bad </h3>";
  }

  optionsFn() {
    console.log(this.ageOfCredit);
  }

  showCreditCal() {
    this.scrollAlert();
    this.hideCredit = false;
  }

  async scrollAlert() {
    const alert = await this.alertController.create({
      header: "Message",

      message: " <br><br> Scroll for Credit Calculator",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
