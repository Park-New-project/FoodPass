import { Component, OnInit } from '@angular/core';

import { ToastController, ModalController } from '@ionic/angular';

import { BasketPage } from '../../modal-pages/basket/basket.page';
import { MapPage } from 'src/app/modal-pages/map/map.page';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { NotificationService } from 'src/app/services/notification/notification.service';


@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss']
})
export class TabHomePage implements OnInit {
  location: object;

  constructor(
    private toastController : ToastController,
    public modalController : ModalController,
    private pageData : PageDataStorageService,
    private messaging: NotificationService
  ) { }

  ngOnInit() {
    console.log("tab-home");
    this.messaging.requestPermission();
  }

  get testlocation(){
    return "test";
  }

  get token(){
    return this.messaging.token;
  }

  onToolbarClicked(){
    this.modalController.create({
      component: MapPage,
      cssClass: "modal-fullscreen"
    }
    ).then(s =>{
      s.present();
    });
  }

  onFabClicked(){
    this.modalController.create({
      component: BasketPage,
      cssClass: "modal-fullscreen"
    }
    ).then(s =>{
      s.present();
    });

  }

  async toast(message : string){
    const toast = await this.toastController.create({
      header: "new text pushed",
      message : message,
      duration: 2000,
      position: "bottom",
      buttons : [
        {
          side: 'start',
          icon: 'star',
        }
      ]

    });
    toast.present();
  }

  toastsync(message : string){
    const toast = this.toastController.create({
      header: "new text pushed",
      message : message,
      duration: 2000,
      position: "bottom",
      buttons : [
        {
          side: 'start',
          icon: 'star',
        }
      ]
    }).then((t)=>{
      t.present();
      console.log('toast presented');
    })
  }

}
