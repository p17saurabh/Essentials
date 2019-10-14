import { HomeRouter } from './home.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRouter
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
