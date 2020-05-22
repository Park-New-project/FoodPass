import { Injectable } from '@angular/core';
import { TabHomeData as TabHomeData } from './tab-home-data/TabHomeData';
import { TabOrderData } from './tab-order-data/TabOrderData';

@Injectable()
export class PageDataStorageService {

  //---home
  tabHome : TabHomeData;

  //---order
  tabOrder : TabOrderData;

  
  constructor() {
    this.tabHome = new TabHomeData();
    this.tabOrder = new TabOrderData();
  }

}
