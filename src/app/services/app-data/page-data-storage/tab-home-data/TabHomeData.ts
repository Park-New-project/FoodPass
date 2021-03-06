import { TabHomeBasketCtrl } from './basket.ctrl';
import { TabHomeFoodtruckListCtrl } from './foodtruckList.ctrl';
import { TabHomeRouteDataCtrl } from './routeData.ctrl';
import { TabHomeMenuListCtrl } from './menuList.ctrl';
import { TabHomeOptionListCtrl } from './optionList.ctrl';
import { TabHomeLocationCtrl } from './location.ctrl';
import { HttpClient } from '@angular/common/http';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { TabHomeMapCtrl } from './map.ctrl';

export class TabHomeData {
    basketCtrl : TabHomeBasketCtrl;
    routeDataCtrl: TabHomeRouteDataCtrl;
    foodtruckListCtrl: TabHomeFoodtruckListCtrl;
    menuListCtrl: TabHomeMenuListCtrl;
    optionListCtrl: TabHomeOptionListCtrl;
    // locationCtrl: TabHomeLocationCtrl;
    mapCtrl : TabHomeMapCtrl;
    
    constructor(dataCtrl : DataControllerService) {
      this.basketCtrl = new TabHomeBasketCtrl(dataCtrl);
      this.foodtruckListCtrl = new TabHomeFoodtruckListCtrl(dataCtrl);
      this.routeDataCtrl = new TabHomeRouteDataCtrl(dataCtrl);
      this.menuListCtrl = new TabHomeMenuListCtrl(dataCtrl);
      this.optionListCtrl = new TabHomeOptionListCtrl(dataCtrl);
      // this.locationCtrl = new TabHomeLocationCtrl();
      this.mapCtrl = new TabHomeMapCtrl(dataCtrl);
    }

}