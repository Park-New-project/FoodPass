import { TabHomeBasketCtrl } from './basket.ctrl';
import { TabHomeFoodtruckListCtrl } from './foodtruckList.ctrl';
import { TabHomeRouteDataCtrl } from './routeData.ctrl';
import { TabHomeMenuListCtrl } from './menuList.ctrl';
import { TabHomeOptionListCtrl } from './optionList.ctrl';
import { TabHomeLocationCtrl } from './location.ctrl';

export class TabHomeData {
    basketCtrl : TabHomeBasketCtrl;
    routeDataCtrl: TabHomeRouteDataCtrl;
    foodtruckListCtrl: TabHomeFoodtruckListCtrl;
    menuListCtrl: TabHomeMenuListCtrl;
    optionListCtrl: TabHomeOptionListCtrl;
    locationCtrl: TabHomeLocationCtrl;
    
    constructor() {
      this.basketCtrl = new TabHomeBasketCtrl();
      this.foodtruckListCtrl = new TabHomeFoodtruckListCtrl();
      this.routeDataCtrl = new TabHomeRouteDataCtrl();
      this.menuListCtrl = new TabHomeMenuListCtrl();
      this.optionListCtrl = new TabHomeOptionListCtrl();
      this.locationCtrl = new TabHomeLocationCtrl();
    }

}