import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';
import { OrderList } from 'src/app/component/order-cardview/order-controller/order-list.interface';

// @Injectable({
//   providedIn: 'root'
// })
export class WaitingOrderControllerService implements OrderList{
  waitingOrderList : OrderData[] = [];

  constructor() {
  }

  get items(){
    return this.waitingOrderList;
  }

  get price(){
    return this.waitingOrderList;
  }

  remove(item: OrderData){
    this.waitingOrderList.splice(this.waitingOrderList.indexOf(item), 1);
  }

  removeItem(index: number){
    this.waitingOrderList.splice(index, 1);
  }

  addItem(item: OrderData){
    this.waitingOrderList.push(item);
  }

  addItemList(items: OrderData[]){
    this.waitingOrderList.push(...items);
  }

  get orderList() : OrderData[] {
    return this.waitingOrderList;
  }
}
