import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { ToastController, ModalController } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';
import { BasketPage } from '../../modal-pages/basket/basket.page';
import { from } from 'rxjs';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { FoodtruckListPage } from './foodtruck-list/foodtruck-list.page';
import { FoodtruckInfoPage } from './foodtruck-info/foodtruck-info.page';
import { MenuListComponent } from 'src/app/component/cardview/menu-list/menu-list.component';
 
import { CardviewComponent } from 'src/app/component/cardview/foodtruck-list/foodtruck-list.component';
import { MapPage } from 'src/app/modal-pages/map/map.page';
import { BasketPageModule } from 'src/app/modal-pages/basket/basket.module';
import { FoodtruckListPageModule } from './foodtruck-list/foodtruck-list.module';
import { FoodtruckInfoPageModule } from './foodtruck-info/foodtruck-info.module';
import { BasketControllerService } from 'src/app/services/basket-controller/basket-controller.service';
import { SharedComponentModule } from 'src/app/component/shared-component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //순서 바꾸면 장바구니만 나옴 ??
    TabHomePageRoutingModule,
    FoodtruckListPageModule,
    FoodtruckInfoPageModule,
    BasketPageModule,
  ],
  declarations: [
    TabHomePage,
    MapPage,
    // BasketPage,
    // FoodtruckInfoPage,
    // MenuListComponent
    // OrderComponent
  ],
  providers: [
    TabHomeControllerService,
    ToastController,
    ModalController,
    NavController,
    BasketControllerService
  ]
})
export class TabHomePageModule {}
//todo: splashScreen
