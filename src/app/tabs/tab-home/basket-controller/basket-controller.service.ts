import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { OrderList } from 'src/app/component/order-cardview/order-controller/order-list.interface';
import { CheckboxValue } from 'src/app/data/basket-data/checkbox-value';
import { BasketOrder } from 'src/app/data/basket-data/basket-order';
import { BasketOrderedMenu } from 'src/app/data/basket-data/basket-ordered-menu';

@Injectable()
export class BasketControllerService extends CheckboxValue implements OrderList{
  basket : BasketOrder[] = [];

  constructor() {
    super();
  }

  get items(){
    return this.basket;
  }

  makeTestdata(){
    let ftId = Math.floor(Math.random() * 1000);
    let menucount = Math.floor(Math.random() * 3) + 1;

    for(let i = 0; i < menucount; i++){
      let menuId = Math.floor(Math.random() * 1000);
      let price = Math.floor(Math.random() * 80) * 100;
      let ftdata : FoodtruckData = {
        id: ftId,
        name: ftId + " foodtruck"
      };
      let menudata : MenuData ={
        menuID: menuId,
        menuName: menuId + " menu",
        price: price
      };
      let optiondata : OptionData = {
        id: ftId + menuId,
        name: ftId + menuId + " option",
        extraPrice: 500
      };
  
      let amount = Math.floor(Math.random() * 2) + 1;
      this.push(ftdata, menudata, optiondata, amount);
    }
  }

  push(foodtruck : FoodtruckData, menu: MenuData, option: OptionData, amount: number = 1){

    const existIndex : number = this.basket.findIndex((value, index, obj) =>{
      return value.foodtruckinfo.id == foodtruck.id;
    })

    if(existIndex == -1){
      //푸드트럭 첫 주문
      
      let newOrder : BasketOrder = new BasketOrder(this);

      let newOrderedMenu : BasketOrderedMenu = new BasketOrderedMenu(newOrder);
      newOrderedMenu.menuinfo = menu;
      newOrderedMenu.optioninfo = option;
      newOrderedMenu.amount = amount;


      newOrder.foodtruckinfo = foodtruck;
      newOrder.orderedMenu = [newOrderedMenu];

      this.basket.push(newOrder);
    }
    else{
      //이미 같은 푸드트럭의 주문이 있음
      let existOrder : BasketOrder = this.basket[existIndex];
      let newOrderedMenu : BasketOrderedMenu = new BasketOrderedMenu(existOrder);
      newOrderedMenu.menuinfo = menu;
      newOrderedMenu.optioninfo = option;
      newOrderedMenu.amount = amount;

      existOrder.orderedMenu.push(newOrderedMenu);
    }

  }

  get totalPrice(){
    let price : number = 0;

    for(let order of this.basket){
      price += order.price;
    }

    return price;
  }

  private classifyCheckedOrder() : [BasketOrder[], BasketOrder[]]{
    let checkedOrder : BasketOrder[] = [];
    let unCheckedOrder : BasketOrder[] = [];

    this.basket.forEach((val, index, arr)=>{
      if(val.value){
        let [remaining, extractOrder] = val.extractCheckedMenu();
        if(remaining){
          unCheckedOrder.push(val);
        }
        checkedOrder.push(extractOrder);
      }
      
    });

    this.toggle();

    return [checkedOrder, unCheckedOrder];
  }

  private orderListChanged(){
    this.basket.forEach((val, index, arr)=>{
      val.checkEmpty();
    })
  }

  extractCheckedOrder() : BasketOrder[] {
    let [checked, unChecked] = this.classifyCheckedOrder();
    this.basket = unChecked;
    this.orderListChanged();
    this.value = true;
    return checked;
  }

}
