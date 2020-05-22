import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
@Component({
  selector: 'app-foodtruck-info',
  templateUrl: './foodtruck-info.page.html',

  styleUrls: ['./foodtruck-info.page.scss'],
})
export class FoodtruckInfoPage implements OnInit  {
  // foodtruckId: number;
  foodtruckName:string;
  foodtruckImage:string;

  //routedata:FoodtruckData[];

  constructor(
    private route : ActivatedRoute,
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
  ) { }

  ngOnInit() {
    this.getBaseData();
    this.pageData.tabHome.menuListCtrl.getMenuList();
  }

  get foodtruckData(){
    return this.pageData.tabHome.routeDataCtrl.currentFoodtruck;
  }

  get menuList(){
    return this.pageData.tabHome.menuListCtrl.menuList;
  }

  getBaseData(){
    //여기에서 foodtruckinfo 가 있는지 보고
    // 없으면 getRoutingData로 foodtruckinfo를 웹에서 받아오기
    // 있으면 생략
    if(this.foodtruckData == undefined){
      this.getRoutingData();
    }
  }

  getRoutingData(){
    let foodtruckId = Number(this.route.snapshot.paramMap.get("id"));
    if(isNaN(foodtruckId)){
      this.pageCtrl.routingHome();
    }
    this.pageData.tabHome.routeDataCtrl.getFoodtruckData(foodtruckId);
  }

  menuClicked(index: number){
    this.pageCtrl.routingHome(this.foodtruckData, this.menuList[index]);
  }

}
