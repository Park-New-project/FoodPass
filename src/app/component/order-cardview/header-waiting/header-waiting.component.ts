import { Component, OnInit, Input } from '@angular/core';
import { OrderControllerService } from '../order-controller/order-controller.service';

@Component({
  selector: 'order-header-waiting',
  templateUrl: './header-waiting.component.html',
  styleUrls: ['./header-waiting.component.scss'],
})
export class HeaderWaitingComponent implements OnInit {
  @Input() orderIndex : number;

  constructor(
    private orderCtrl : OrderControllerService
  ) { }

  ngOnInit() {}

  get order(){
    return this.orderCtrl.items[this.orderIndex];
  }

  get foodtruckInfo(){
    return this.order.foodtruckinfo;
  }

  get orderedMenuList(){
    return this.order.orderedMenu;
  }

  get price(){
    return this.orderCtrl.orderPrice(this.orderIndex);
  }
}
