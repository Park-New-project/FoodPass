import { Component, OnInit, Input } from '@angular/core';
import { OrderType } from './order-type.enum';
import { OrderControllerService } from './order-controller/order-controller.service';
import { TabHomeBasketCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/basket.ctrl';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabOrderWaitingListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/waitingList.ctrl';

@Component({
  selector: 'component-order-cardview',
  templateUrl: './order-cardview.component.html',
  styleUrls: ['./order-cardview.component.scss'],
})
export class OrderCardviewComponent implements OnInit {
  @Input() orderType : OrderType;
  @Input() orderIndex : number;

  constructor(
    // @Optional() private basketCtrl : BasketControllerService,
    // @Optional() private waitingCtrl : WaitingOrderControllerService,
    private orderCtrl : OrderControllerService,
    // private historyCtrl : OrderHistoryService,
    private pageData : PageDataStorageService,
  ) { }

  get basketCtrl() : TabHomeBasketCtrl {
    return this.pageData.tabHome.basketCtrl;
  }

  get waitingCtrl() : TabOrderWaitingListCtrl {
    return this.pageData.tabOrder.waitingCtrl;
  }

  ngOnInit() {
    this.orderCtrl.Type = this.orderType;
    if(this.orderType == OrderType.basket){
      this.orderCtrl.Controller = this.basketCtrl;
    }
    else if(this.orderType == OrderType.waiting){
      this.orderCtrl.Controller = this.waitingCtrl;
    }
    else{
      throw Error("invalid orderType");
    }
  }

  get order(){
    return this.orderCtrl.items[this.orderIndex];
  }

  get menuList(){
    return this.order.orderedMenu;
  }

  isBasket(){
    return this.orderType == OrderType.basket;
  }

  isWaiting(){
    return this.orderType == OrderType.waiting;
  }


  orderReceived(){
    //받앗어요
    let order = this.order;
    this.orderCtrl.removeOrder(this.orderIndex);
    // this.historyCtrl.save(order);
  }

  deleteMenu(index : number){
    this.orderCtrl.removeMenu(this.orderIndex, index);
  }
}
