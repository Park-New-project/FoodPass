import { Injectable } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';

// 삭제예정
@Injectable({
  providedIn: 'root'
})
export class ServerConnecterService {
  FoodtruckDummyData: FoodtruckData[] = [];
  MenuDummyData: MenuData[]=[];

  constructor() {
    this.FoodtruckDummyData.push({id: 10, name: "닭발집 10", locate:"A", distance:500,inform:"치즈닭발, 무뼈닭발있습니다.", 
    grade:3.5, wating:5, notice:"화요일은 충남대 갑니다" , src:"../assets/icon/foodtruck.png"});
    this.FoodtruckDummyData.push({id: 11, name: "와플집 11", locate:"B", distance:600, inform:" 초코와플, 바나나와플, 딸기와플,  빙수",
    grade: 4.5, wating:12, notice:"1명당 대기시간 약 3분 소요됩니다.", src:"../assets/icon/foodtruck2.png"});
    this.FoodtruckDummyData.push({id: 12, name: "떡볶이집 12", locate:"C", distance:700, inform:"떡복이 맵기: 순함, 중간, 매움",
    grade:4, wating:3, notice:"이번주 토요일 엑스포 행사장 갑니다.", src:"../assets/icon/foodtruck3.png"});
    this.FoodtruckDummyData.push({id: 13, name: "13", locate:"default", distance:0, inform:"짝수 맞추기 위한 카드뷰",
    grade:0, wating:0, notice:"카드가 홀수일 경우 공간만 차지하게 해야 함"});

    
    this.MenuDummyData.push({menuID:10, menuName:"도넛1", menuInform:"치즈맛 도넛", price:5000, src:"../assets/icon/donut.png"});
    this.MenuDummyData.push({menuID:12, menuName:"도넛2", menuInform:"초코맛 도넛", price:6000, src:"../assets/icon/donut.png"});
    this.MenuDummyData.push({menuID:14, menuName:"와플1", menuInform:"바나나 와플", price:7000, src:"../assets/icon/waffle.png"});
    this.MenuDummyData.push({menuID:16, menuName:"와플2", menuInform:"딸기와플", price:8000, src:"../assets/icon/waffle.png"});

   }

  getFoodtruckList() : FoodtruckData[]{
    // let object : FoodtruckData = {../assets/icon/foodtruck.png
    //     id: 1,
    // }
    return this.FoodtruckDummyData;
  }

  getMenuList(foodtruckid: number) : MenuData[]{
    // 나중에 윗줄의 파라미터로 들어갈것들 , foodtruckName:string, foodtruckInform:string, foodtruckGrade:number

  
    return this.MenuDummyData;
  }

  getOptionList(foodtruckId: number, menuId: number) : OptionData[]{
    let options : OptionData[] = [{
      id: 1001,
      name: "기본",
      extraPrice: 0
    },
    {
      id: 1002,
      name: "고오급",
      extraPrice: 500
    }
  ];

    return options;
  }


  //웹 라우팅시
  getFoodtruckData(id : number) : FoodtruckData{
    return this.FoodtruckDummyData[0];
  }
  getMenuData(foodtruckId: number, menuId: number) : MenuData{
    return this.MenuDummyData[0];
  }
  
}


