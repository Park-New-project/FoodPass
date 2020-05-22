import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { LocationData } from 'src/app/data/location';
import { MenuData } from 'src/app/data/menu';

//곧 없애고 pageController로 옮길 예정
@Injectable()
export class TabHomeControllerService {
  locationData: LocationData;
  
  constructor() {
    this.locationData ={lat: 36.3504563333333, lng:127.38481833333333};
  }
  setLocation(location){
    this.locationData = location;
  }
 getLocation() : LocationData{
    return this.locationData;
  }


}

