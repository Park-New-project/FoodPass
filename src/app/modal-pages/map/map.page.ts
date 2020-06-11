import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
import { TabHomeLocationCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/location.ctrl';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

// Kakao Map API
declare var kakao;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit, AfterViewInit {
  map: any;
  marker: any;

  position: any;          // 지정 위치 데이터 : LatLng
  coordinates:any;        // 현재 위치 관련 데이터 : LatLng
  
  dataLocation: LocationData;   // 불러온 이전 위치 : LocationData
  newLocation: LocationData;    // 새로 지정한 위치 : LocationData

  inputAddress: string;



  constructor(
    private geo: Geolocation,
    private modalCtrl : ModalController,
    private pageData: PageDataStorageService,
    private sharedData : SharedDataService,
  ) {

    this.dataLocation = this.sharedData.geolocation.currentLocation;
    this.newLocation = {lat: this.dataLocation.lat, lng:this.dataLocation.lng};
  }

  ngOnInit() {
    // this.getCurrentPosition();
    setTimeout(() => {
      // this.initPosition();
      this.makeMap();
    }, 150);
  }

  ngAfterViewInit(){
  }

getInputAddress(){
  alert(this.inputAddress);
}

  // get pageCtrl() : TabHomeLocationCtrl {
  //   return this.pageData.tabHome.locationCtrl;
  // }

  get getLatitude(){
    return " lat: "+this.newLocation.lat;
  }

  get getLongitude(){
    return " lng: "+this.newLocation.lng;
  }

  async initPosition() {
    var geoOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    try {
      this.coordinates = await this.geo.getCurrentPosition(geoOptions);
      this.getCurrentPosition();

    }catch{
    }
    this.makeMap();
  }

  makeMap(){
    this.position = new kakao.maps.LatLng(this.dataLocation.lat, this.dataLocation.lng);

    const mapOptions = {
      center: this.position,
      level: 3
    };
    this.map = new kakao.maps.Map(document.getElementById('map'), mapOptions);
    this.marker = new kakao.maps.Marker({  
      map: this.map, 
      draggable: true,
      position: this.position
  }); 
    this.displayMarker(this.position);
    this.map.relayout();
  }

  displayMarker(locPosition) {
    this.marker.setPosition(locPosition);
    kakao.maps.event.addListener(this.marker, 'dragend', () => {
      var latlng = this.marker.getPosition();
      this.newLocation.lat = latlng.getLat();
      this.newLocation.lng =latlng.getLng();
    });
    this.map.setCenter(locPosition);  
  }

  // displayMarker(locPosition) {
  //   const marker = new kakao.maps.Marker({  
  //       map: this.map, 
  //       draggable: true,
  //       position: locPosition
  //   }); 

  //   kakao.maps.event.addListener(marker, 'dragend', () => {
  //     var latlng = marker.getPosition();
  //     this.newLocation.lat = latlng.getLat();
  //     this.newLocation.lng =latlng.getLng();
  //   });
  //   this.map.setCenter(locPosition);  
  // }
  
  getCurrentPosition(){
    this.newLocation.lat = this.coordinates.coords.latitude;
    this.newLocation.lng = this.coordinates.coords.longitude;
    this.position = new kakao.maps.LatLng(this.newLocation.lat, this.newLocation.lng);
    this.displayMarker(this.position);
  }


  
  alertAddress(){
    var geocoder = new kakao.maps.services.Geocoder();
    // geocoder.coord2Address(this.newLocation.lng, this.newLocation.lat, (result, status)=>{
    //   if (status === kakao.maps.services.Status.OK) {
    //     var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
    //     detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
        
    //     var content = '<div class="bAddr">' +
    //                     '<span class="title">법정동 주소정보</span>' + 
    //                     detailAddr + 
    //                 '</div>';
    //     console.log(content);
    //     alert();
    //   }

    // });   
       
    // geocoder.addressSearch(data_adp, (result, status) =>{

    //   // 정상적으로 검색이 완료됐으면 
    //    if (status === kakao.maps.services.Status.OK) {
  
    //       this.position = new kakao.maps.LatLng(result[0].y, result[0].x);
     
    //       alert("OK");
    //       // 결과값으로 받은 위치를 마커로 표시합니다
    //       this.displayMarker( this.position );
    //    }else{
   
    //     alert("NO");
    //    }
    //   });
       var ps = new kakao.maps.services.Places(); 

    // 키워드로 장소를 검색합니다
    ps.keywordSearch("",  (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
            this.position = new kakao.maps.LatLng(data[0].y, data[0].x);
            this.displayMarker(this.position);
        }else{
          alert("검색 결과가 없습니다!");
        }
      });
    }

  dismissCancel(){
    // this.pageCtrl.setLocation(this.dataLocation);
    //alert("dismissCancel");
    this.modalCtrl.dismiss();
  }

  dismissOK(){
    // this.pageCtrl.setLocation(this.newLocation);
    //alert("dismissOK");
    this.modalCtrl.dismiss();
  }
}
