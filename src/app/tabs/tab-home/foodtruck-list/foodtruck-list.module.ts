import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckListPageRoutingModule } from './foodtruck-list-routing.module';

import { FoodtruckListPage } from './foodtruck-list.page';
import { CardviewComponent } from 'src/app/component/cardview/foodtruck-list/foodtruck-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckListPageRoutingModule
  ],
  exports: [
    FoodtruckListPage
  ],
  declarations: [
    CardviewComponent,
    FoodtruckListPage,
  ]
})
export class FoodtruckListPageModule {}
