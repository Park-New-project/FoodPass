
import { OrderData } from 'src/app/data/order';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { BasketOrderedMenu } from './basket-ordered-menu';
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { CheckboxValue } from './checkbox-value';

export class BasketOrder extends CheckboxValue implements OrderData{
    id?: number;
    foodtruckinfo: FoodtruckData;
    orderedMenu: BasketOrderedMenu[] = [];

    constructor(parent: CheckboxValue, orderData: OrderData = null){
        super(parent);
        if(orderData != null){
            this.id = orderData.id;
            this.foodtruckinfo = orderData.foodtruckinfo;
            this.orderedMenu = [];
            orderData.orderedMenu.forEach((val, index, arr) =>{
                this.orderedMenu.push(new BasketOrderedMenu(this, val));
            })
        }
    }

    get items(){
        return this.orderedMenu;
    }

    get price(){
        let price = 0;
        for(let menu of this.orderedMenu){
            if(menu.value){
                price += menu.amount * (menu.menuinfo.price + menu.optioninfo.extraPrice);
            }
        }
        return price;
    }

    extractCheckedMenu() : [boolean, BasketOrder]{
        let remainMember : BasketOrderedMenu[] = [];
        let extractMember : BasketOrderedMenu[] = [];
        this.orderedMenu.forEach((val, index, arr)=>{
            if(val.value){
                //체크된것
                extractMember.push(val);
            }
            else{
                remainMember.push(val);
            }
        });

        this.orderedMenu = remainMember;
        // this.setItems(remainMember);
        const remainThis : boolean = this.orderedMenu.length != 0;

        const extractOrder = new BasketOrder(this.parent);
        extractOrder.orderedMenu = extractMember;
        extractOrder.foodtruckinfo = this.foodtruckinfo;

        return [remainThis, extractOrder];
    }

    extractData() : OrderData {
        let orderedMenuData : OrderedMenuData[] = [];
        this.orderedMenu.forEach((val, index, arr) =>{
            orderedMenuData.push(val.extractData());
        })
        let orderData : OrderData = {
            id : this.id,
            foodtruckinfo: this.foodtruckinfo,
            orderedMenu: orderedMenuData
        };

        return orderData;
    }
}