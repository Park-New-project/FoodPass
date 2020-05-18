import { Component, OnInit } from '@angular/core';


import { ToastController, ModalController } from '@ionic/angular';
import { ServerConnecterService } from '../../services/server-connecter/server-connecter.service';

import { BasketPage } from '../../modal-pages/basket/basket.page';
import { TabHomeControllerService } from 'src/app/services/tab-home-controller/tab-home-controller.service';
import { MapPage } from 'src/app/modal-pages/map/map.page';
import { LocationData } from 'src/app/data/location';


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
    public pageController : TabHomeControllerService
  ) { }

  ngOnInit() {
    console.log("tab-home");
  }

  get testlocation(){
    return "test";
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
