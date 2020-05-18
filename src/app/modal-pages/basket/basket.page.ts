import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { BasketControllerService } from 'src/app/tabs/tab-home/basket-controller/basket-controller.service';
import { WaitingOrderControllerService } from 'src/app/services/waiting-order-controller/waiting-order-controller.service';
import { Router } from '@angular/router';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { orderSlide } from 'src/app/services/app-data/page-controller/tab-order-slide.enum';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private basketCtrl: BasketControllerService,
    private waitingOrderCtrl: WaitingOrderControllerService,
    private PageCtrl : PageControllerService,
  ) { }


  ngOnInit() {
    console.log("basketPage");
    this.basketCtrl.makeTestdata();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  get totalPrice(){
    return this.basketCtrl.totalPrice;
  }

  get checkValue(){
    return this.basketCtrl.checkValue;
  }
  set checkValue(checked: boolean){
    this.basketCtrl.value = checked;
  }
  get indeterminated(){
    return this.basketCtrl.indeterminate;
  }

  get orderKeys(){
    return this.basketCtrl.basket;
  }

  get orderType(){
    return OrderType.basket;
  }

  checkboxClicked(){
    this.basketCtrl.toggle();
  }

  get isEmpty(){
    //장바구니가 비었을때
    return this.basketCtrl.basket.length == 0;
  }

  get orderEnable(){
    //주문하기 버튼의 활성화 여부 지정
    return this.isEmpty || this.totalPrice == 0;
  }

  orderButtonClicked(){
    //서버통신부분
    //일단 바로 성공하는걸로 
    this.orderSuccess();
  }

  orderSuccess(){
    let checkedOrderList = this.basketCtrl.extractCheckedOrder();
    checkedOrderList.forEach((val, index, arr)=>{
      this.waitingOrderCtrl.addItem(val.extractData());
    });

    console.log(this.waitingOrderCtrl.orderList.length);
    this.dismiss();
    // this.router.navigateByUrl("/tabs/order");
    this.PageCtrl.routingOrder(orderSlide.waitingOrder);
  }

}
