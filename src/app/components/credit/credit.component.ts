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
  constructor(private alertController: AlertController) {}
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
          "Unearned points PH",
          "Utilization Rate",
          "Unearned points UR",
          "Age of Credit",
          "Unearned points AoC",
          "Type of credit",
          "Unearned points ToC",
          "No of hard inquires",
          "Unearned points HI"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [50, 0, 7, 0, 20, 0, 10, 0, 5, 0],
            backgroundColor: [
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 0, 0, 1)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 0, 0, 1)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 0, 0, 1)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 0, 0, 1)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 0, 0, 1)"
            ],
            hoverBackgroundColor: [
              "#FFCE56",
              "#D3D3D3",
              "#FF6384",
              "#D3D3D3",
              "#36A2EB",
              "#D3D3D3",
              "#FFCE56",
              "#D3D3D3",
              "#FF6384",
              "#D3D3D3"
            ],
            borderWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          }
        ]
      }
    });
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
        "Your credit score is " + Math.round(this.totalPoints) + " out of 850",
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

  optionsFn() {
    console.log(this.ageOfCredit);
  }

  showCreditCal() {
    this.hideCredit = false;
  }
}
