import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { TabHomeRouteDataCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/routeData.ctrl';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabHomeOptionListCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/optionList.ctrl';

@Component({
  selector: 'home-menu-info',
  templateUrl: './menu-info.page.html',
  styleUrls: ['./menu-info.page.scss'],
})
export class MenuInfoPage implements OnInit {
  amount: number = 1;
  price: number = 0;
  checkedValue: number;

  constructor(
    private route: ActivatedRoute,
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
  ) { }

  ngOnInit() {
    this.getBaseData();
    this.optionListCtrl.getOptionList(this.foodtruckData.id, this.menuData.menuID);
    this.checkedValue = 1001;
  }

  
  ctrlAmount(add : boolean){
    
    if(add){
      this.amount++;
    }
    else{
      if(this.amount > 1){
        this.amount--;
      }
    }
  }

  get routeCtrl(): TabHomeRouteDataCtrl{
    return this.pageData.tabHome.routeDataCtrl;
  }

  get foodtruckData() : FoodtruckData{
    return this.routeCtrl.currentFoodtruck;
  }

  get menuData() : MenuData{
    return this.routeCtrl.currentMenu;
  }

  get optionListCtrl() : TabHomeOptionListCtrl {
    return this.pageData.tabHome.optionListCtrl;
  }

  get optionList() : OptionData[]{
    return this.optionListCtrl.optionList;
  }

  getBaseData(){
    if(this.menuData == undefined || this.foodtruckData == undefined){
      this.getRoutingData();
    }
  }

  getRoutingData(){
    let foodtruckId = Number(this.route.snapshot.paramMap.get("foodtruckId"));
    let menuId = Number(this.route.snapshot.paramMap.get("id"));
    if(isNaN(menuId) || isNaN(foodtruckId)){
      this.pageCtrl.routingHome();
    }

    this.routeCtrl.getFoodtruckData(foodtruckId);
    this.routeCtrl.getMenuData(foodtruckId, menuId);
  }

  get basketCtrl() {
    return this.pageData.tabHome.basketCtrl;
  }
  orderToBasket(){
    this.basketCtrl.push(this.foodtruckData, this.menuData, this.optionList[0], this.amount);
    this.pageCtrl.routingHome(this.foodtruckData);
  }


}
