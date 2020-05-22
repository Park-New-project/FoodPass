import { OrderData } from 'src/app/data/order';
import { Storage } from '@ionic/storage';

export class TabOrderHistoryListCtrl {

  orderList : OrderData[] = [];

  constructor(
  ) {
    
    // this.load();
  }

//   load() : void {
//     this.st.get('orderList').then(val =>{
//       this.orderList = val;
//       if(this.orderList == null){
//         this.orderList = [];
//       }      
//     });
//   }

//   save(order : OrderData){

//     this.orderList.push(order);
//     this.st.set('orderList', this.orderList);
//   }

  get isEmpty(){
    return this.orderList.length == 0;
  }
}
