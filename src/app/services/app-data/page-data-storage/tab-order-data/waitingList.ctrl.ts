import { OrderData } from 'src/app/data/order';
import { OrderList } from 'src/app/component/order-cardview/order-controller/order-list.interface';


export class TabOrderWaitingListCtrl implements OrderList{
  waitingList : OrderData[] = [];

  constructor() {
  }

  get items(){
    return this.waitingList;
  }

  get price(){
    return this.waitingList;
  }

  remove(item: OrderData){
    this.waitingList.splice(this.waitingList.indexOf(item), 1);
  }

  removeItem(index: number){
    this.waitingList.splice(index, 1);
  }

  addItem(item: OrderData){
    this.waitingList.push(item);
  }

  addItemList(items: OrderData[]){
    this.waitingList.push(...items);
  }

  get orderList() : OrderData[] {
    return this.waitingList;
  }
}
