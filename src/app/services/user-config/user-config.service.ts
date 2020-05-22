import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  myAccountId: number;
  foodtruckOwner: boolean;

  constructor() { }

  init(){
    this.foodtruckOwner = false;
    this.receiveId();
  }

  receiveId(){
    this.myAccountId = 1000;
  }

}
