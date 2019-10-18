import { QuotesComponent } from "./quotes/quotes.component";
import { YoututbeSlidesComponent } from "./yoututbe-slides/yoututbe-slides.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { StartComponent } from "./start/start.component";
import { LogoComponent } from "./logo/logo.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { SignoutComponent } from "./signout/signout.component";

@NgModule({
  declarations: [
    SlidesComponent,
    LogoComponent,
    StartComponent,
    SignoutComponent,
    YoututbeSlidesComponent,
    QuotesComponent
  ],
  exports: [
    SlidesComponent,
    LogoComponent,
    StartComponent,
    SignoutComponent,
    YoututbeSlidesComponent,
    QuotesComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}
