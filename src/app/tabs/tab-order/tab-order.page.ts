import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { orderSlide } from 'src/app/services/app-data/page-data-storage/tab-order-data/tab-order-slide.enum';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {
  @ViewChild(IonSlides, {static: false}) slider : IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private pageCtrl : PageControllerService,
    private pageData : PageDataStorageService,
  ) { }

  ngOnInit() {
    this.pageValue = orderSlide.waitingOrder;
  }

  get pageValue(){
    return this.pageData.tabOrder.slideCtrl.orderSlideValue;
  }
  set pageValue(no : orderSlide){
    this.pageData.tabOrder.slideCtrl.orderSlideValue = no;
  }

  get slideValue(){
    return this.pageValue;
  }
  set slideValue(value : orderSlide){
    this.pageValue = value;
    this.slider.slideTo(this.pageValue);
  }

  segmentChanged(ev: CustomEvent) {
    this.slideValue = Number(ev.detail.value);
  }

  slideChanged(){
    this.slider.getActiveIndex().then(v =>{
      this.slideValue = v;
    });
  }

}