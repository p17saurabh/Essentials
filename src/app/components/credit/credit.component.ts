import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormsModule, Validators } from "@angular/forms";
import { Chart } from "chart.js";
import { AlertController } from "@ionic/angular";
import { IonContent } from "@ionic/angular";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-credit",
  templateUrl: "./credit.component.html",
  styleUrls: ["./credit.component.scss"]
})
export class CreditComponent implements OnInit {
  @ViewChild("doughnutCanvas", { static: false }) doughnutCanvas: ElementRef;
  @ViewChild("content", { static: true }) content: IonContent;
  @ViewChild("mySlider", { static: true }) slides: IonSlides;
  slide1: any;
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
    this.content.scrollToBottom(300);
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
        this.score(this.totalPoints),
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
    this.content.scrollToBottom(300);
    this.hideButton = true;
    //this.scrollAlert();
    this.slide1.slideTo(0, 300);
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
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,

    shadow: true,
    slideShadows: true,
    pagination: {
      el: ".swiper-pagination",
      type: "none"
    },
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(
          swiper.originalParams,
          overwriteParams
        );
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal()
              ? $slideEl.find(".swiper-slide-shadow-left")
              : $slideEl.find(".swiper-slide-shadow-top");
            let shadowAfter = swiper.isHorizontal()
              ? $slideEl.find(".swiper-slide-shadow-right")
              : $slideEl.find(".swiper-slide-shadow-bottom");
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(
                `<div class="swiper-slide-shadow-${
                  swiper.isHorizontal() ? "left" : "top"
                }"></div>`
              );
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(
                `<div class="swiper-slide-shadow-${
                  swiper.isHorizontal() ? "right" : "bottom"
                }"></div>`
              );
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length)
              shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length)
              shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl.transform(
            `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          );
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;

            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ["webkitTransitionEnd", "transitionend"];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };

  skip(slides) {
    console.log("inside skip");
    slides.slideTo(5, 300);
    this.slide1 = slides;
  }
}
