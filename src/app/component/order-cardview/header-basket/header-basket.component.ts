import { Component, OnInit, Input } from '@angular/core';
import { OrderControllerService } from '../order-controller/order-controller.service';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';

@Component({
  selector: 'order-header-basket',
  templateUrl: './header-basket.component.html',
  styleUrls: ['./header-basket.component.scss'],
})
export class HeaderBasketComponent implements OnInit {
  @Input() orderIndex : number;

  constructor(
    private orderCtrl : OrderControllerService
  ) { }

  ngOnInit() {}

  get order() : BasketOrder{
    return this.orderCtrl.items[this.orderIndex] as BasketOrder;
  }

  get checkValue(){
    return this.order.checkValue
  }

  set checkValue(checked : boolean){
    this.order.value = checked;
  }

  get indeterminated(){
    return this.order.indeterminate;
  }

  get foodtruckInfo(){
    return this.order.foodtruckinfo;
  }
  get price(){
    return this.orderCtrl.orderPrice(this.orderIndex);
  }

  checkValueToggle(){
    this.order.toggle();
  }

}
