import { Injectable } from '@angular/core';
import { OrderList } from './order-list.interface';
import { OrderData } from 'src/app/data/order';
import { OrderType } from '../order-type.enum';

@Injectable()
export class OrderControllerService {
  private orderType : OrderType;
  private orderList : OrderList;
  
  constructor() { }

  set Controller(orderList : OrderList){
    this.orderList = orderList;
  }

  set Type(orderType : OrderType){
    this.orderType = orderType;
  }

  get isBasket() : boolean {
    return this.orderType == OrderType.basket;
  }

  get isWaiting() : boolean {
    return this.orderType == OrderType.waiting;
  }
  

  get items() : OrderData[] {
    return this.orderList.items;
  }

  orderPrice(orderIndex : number){
    let price : number = 0;
    this.orderList.items[orderIndex].orderedMenu.forEach((val, i, arr)=>{
      price += val.amount * (val.menuinfo.price + val.optioninfo.extraPrice);
    })

    return price;
  }

  removeOrder(orderIndex : number){
    this.orderList.items.splice(orderIndex, 1);
  }

  removeMenu(orderIndex : number, menuIndex : number){
    this.orderList.items[orderIndex].orderedMenu.splice(menuIndex, 1);
    if(this.orderList.items[orderIndex].orderedMenu.length == 0){
      this.removeOrder(orderIndex);
    }
  }

}
