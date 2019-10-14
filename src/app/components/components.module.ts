import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { SignoutComponent } from './signout/signout.component';



@NgModule({
  declarations: [SlidesComponent,LogoComponent,StartComponent,SignoutComponent],
  exports:[SlidesComponent,LogoComponent,StartComponent,SignoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
