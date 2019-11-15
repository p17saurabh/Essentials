import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { HttpClientModule } from "@angular/common/http";
import { PayPal } from "@ionic-native/paypal/ngx";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
