import { Injectable } from '@angular/core';
import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';

// @Injectable({
//   providedIn: 'root'
// })
export class OrderHistoryService {

  orderList : OrderData[] = [];

  constructor(
    private st : Storage
  ) {
    
    // this.load();
  }

  load() : void {
    this.st.get('orderList').then(val =>{
      this.orderList = val;
      if(this.orderList == null){
        this.orderList = [];
      }      
    });
  }

  save(order : OrderData){

    this.orderList.push(order);
    this.st.set('orderList', this.orderList);
  }

  get isEmpty(){
    return this.orderList.length == 0;
  }
}
