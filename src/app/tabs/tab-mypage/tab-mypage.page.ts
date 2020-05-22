import { Component, OnInit } from '@angular/core';
import { UserConfigService } from 'src/app/services/user-config/user-config.service';

@Component({
  selector: 'app-tab-mypage',
  templateUrl: './tab-mypage.page.html',
  styleUrls: ['./tab-mypage.page.scss'],
})
export class TabMypagePage implements OnInit {

  constructor(
    private config : UserConfigService,
  ) { }

  ngOnInit() {
  }


  get admin() : boolean{
    return this.config.foodtruckOwner;
  }

  set admin(b : boolean){
    this.config.foodtruckOwner = b;
  }
}
