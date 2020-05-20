import { Component, OnInit } from '@angular/core';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { ServerConnecterService } from 'src/app/services/server-connecter/server-connecter.service';
import { TruckType } from 'src/app/component/cardview/truck-type.enums';

@Component({
  selector: 'home-foodtruck-list',
  templateUrl: './foodtruck-list.page.html',
  styleUrls: ['./foodtruck-list.page.scss'],
})
export class FoodtruckListPage implements OnInit {
  foodtruckList: FoodtruckData[];
 

  constructor(
    private pageController : TabHomeControllerService,
    private serverConnecter : ServerConnecterService
  ) { }

  ngOnInit() {
    
    this.foodtruckList = this.serverConnecter.getFoodtruckData();
  }
  get truckType(){
    return TruckType.truck;
  }

}
