import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderType } from 'src/app/component/order-cardview/order-type.enum';
import { orderSlide } from 'src/app/services/app-data/page-data-storage/tab-order-data/tab-order-slide.enum';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabHomeBasketCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/basket.ctrl';
import { TabOrderWaitingListCtrl } from 'src/app/services/app-data/page-data-storage/tab-order-data/waitingList.ctrl';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private PageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
  ) { }


  ngOnInit() {
    console.log("basketPage");
    this.basketCtrl.makeTestdata();
  }

  get basketCtrl() : TabHomeBasketCtrl {
    return this.pageData.tabHome.basketCtrl;
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

  get waitingOrderCtrl() : TabOrderWaitingListCtrl {
    return this.pageData.tabOrder.waitingCtrl;
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
