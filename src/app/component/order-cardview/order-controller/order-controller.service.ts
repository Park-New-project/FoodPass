import { Injectable } from '@angular/core';
import { OrderList } from './order-list.interface';
import { OrderData } from 'src/app/data/order';

@Injectable({
  providedIn: 'root'
})
export class OrderControllerService {
  orderList : OrderList;
  constructor() { }

  set Controller(orderList : OrderList){
    this.orderList = orderList;
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

  deleteOrder(orderIndex : number){
    this.orderList.items.splice(orderIndex, 1);
  }

  deleteMenu(orderIndex : number, menuIndex : number){
    this.orderList.items[orderIndex].orderedMenu.splice(menuIndex, 1);
    if(this.orderList.items[orderIndex].orderedMenu.length == 0){
      this.deleteOrder(orderIndex);
    }
  }

}