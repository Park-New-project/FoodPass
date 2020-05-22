import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderCardviewComponent } from './order-cardview.component';
import { HeaderBasketComponent } from './header-basket/header-basket.component';
import { HeaderWaitingComponent } from './header-waiting/header-waiting.component';
import { OrderControllerService } from './order-controller/order-controller.service';
import { OrderedMenuComponent } from './ordered-menu/ordered-menu.component';
import { OwnerEditComponentModule } from '../owner-edit/owner-edit.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OwnerEditComponentModule,
    ],
    exports: [
        OrderCardviewComponent
    ],
    declarations: [
        OrderCardviewComponent,
        HeaderBasketComponent,
        HeaderWaitingComponent,
        OrderedMenuComponent,
    ],
    providers: [
        OrderControllerService
    ]
})
export class OrderCardviewComponentModule {}
  