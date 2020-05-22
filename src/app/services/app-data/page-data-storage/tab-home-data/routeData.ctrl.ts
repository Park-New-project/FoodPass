import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';

export class TabHomeRouteDataCtrl {
    currentFoodtruck: FoodtruckData;
    currentMenu: MenuData;

    getFoodtruckData(id : number){
        this.currentFoodtruck = {id: 10, name: "닭발집 10", locate:"A", distance:500,inform:"치즈닭발, 무뼈닭발있습니다.", 
        grade:3.5, wating:5, notice:"화요일은 충남대 갑니다" , src:"../assets/icon/foodtruck.png"};
    }
    getMenuData(foodtruckId: number, menuId: number){
        this.currentMenu = {menuID:10, menuName:"도넛1", menuInform:"치즈맛 도넛", price:5000, src:"../assets/icon/donut.png"};
    }
}