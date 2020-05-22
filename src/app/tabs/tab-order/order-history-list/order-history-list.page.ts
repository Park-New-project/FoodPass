import { Component, OnInit } from '@angular/core';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabOrderHistoryListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/orderHistoryList.ctrl';

@Component({
  selector: 'order-order-history-list',
  templateUrl: './order-history-list.page.html',
  styleUrls: ['./order-history-list.page.scss'],
})
export class OrderHistoryListPage implements OnInit {

  constructor(
    private pageData: PageDataStorageService,
  ) { }

  ngOnInit() {
     
  }

  get historyCtrl() : TabOrderHistoryListCtrl {
    return this.pageData.tabOrder.historyCtrl;
  }

  get orderList(){
    return this.historyCtrl.orderList;
  }

  get isEmpty(){
    return this.historyCtrl.isEmpty;
  }
  
}
