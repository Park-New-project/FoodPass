import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingOrderListPageRoutingModule } from './waiting-order-list-routing.module';

import { WaitingOrderListPage } from './waiting-order-list.page';
import { OrderCardviewComponentModule } from 'src/app/component/order-cardview/order-cardview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingOrderListPageRoutingModule,
    OrderCardviewComponentModule
  ],
  exports:[
    WaitingOrderListPage
  ],
  declarations: [
    WaitingOrderListPage,
  ]
})
export class WaitingOrderListPageModule {}
