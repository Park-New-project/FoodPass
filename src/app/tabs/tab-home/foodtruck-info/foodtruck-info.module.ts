import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodtruckInfoPageRoutingModule } from './foodtruck-info-routing.module';

import { FoodtruckInfoPage } from './foodtruck-info.page';
import { MenuInfoPageModule } from '../menu-info/menu-info.module';
import { MenuListComponent } from 'src/app/component/cardview/menu-list/menu-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodtruckInfoPageRoutingModule,
    MenuInfoPageModule
  ],
  exports: [
    FoodtruckInfoPage
  ],
  declarations: [
    FoodtruckInfoPage,
    MenuListComponent,
  ]
})
export class FoodtruckInfoPageModule {}
