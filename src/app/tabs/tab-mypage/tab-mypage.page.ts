import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { PageControllerService } from 'src/app/services/app-data/page-controller/page-controller.service';

@Component({
  selector: 'app-tab-mypage',
  templateUrl: './tab-mypage.page.html',
  styleUrls: ['./tab-mypage.page.scss'],
})
export class TabMypagePage implements OnInit {

  constructor(
    private config : SharedDataService,
    private push : NotificationService,
    private pageCtrl : PageControllerService
  ) { }

  ngOnInit() {
  }


  get admin() : boolean{
    return this.config.foodtruckOwner;
  }

  set admin(b : boolean){
    this.config.foodtruckOwner = b;
  }

  requestPermission(){
    // this.push.requestPermission()
    console.log('requestPermission');
  }

  showOrderHistory(){
    this.pageCtrl.presentOrderHistory();
  }
}
