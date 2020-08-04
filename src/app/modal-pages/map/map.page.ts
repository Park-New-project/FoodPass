import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';
import { PageDataStorageService } from 'src/app/services/app-data/page-data-storage/page-data-storage.service';
// import { TabHomeLocationCtrl } from 'src/app/services/app-data/page-data-storage/tab-home-data/location.ctrl';
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

  position: any; 
  coordinates:any; 
  
  dataLocation: LocationData; 
  newLocation: LocationData; 

  inputData: string;
  outputData: string;

  constructor(
    private geo: Geolocation,
    private modalCtrl : ModalController,
    private sharedData : SharedDataService,
  ) {

    this.dataLocation = this.sharedData.geolocation.getNewLocation();
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
  alert(this.inputData);
}

  // get pageCtrl() : TabHomeLocationCtrl {
  //   return this.pageData.tabHome.locationCtrl;
  // }

  get getoutputData(){
    // lat: "+this.newLocation.lat+" lng: "+this.newLocation.lng
    return this.outputData;
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
      this.searchLatlng();
    });
    this.map.setCenter(locPosition); 
    this.searchLatlng(); 

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
    this.sharedData.geolocation.setCurrentLocation();
    this.newLocation = this.sharedData.geolocation.currentLocation;
    
    //this.position = new kakao.maps.LatLng(this.newLocation.lat, this.newLocation.lng);
    this.displayMarker(this.position);
  }


  searchLatlng(){
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(this.newLocation.lng, this.newLocation.lat, (result, status)=>{
      if (status === kakao.maps.services.Status.OK) {
        // var detailAddr = !!result[0].road_address ? '도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
        // detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
        this.outputData = result[0].address.address_name ;
        console.log(this.outputData);
      }

    });   
  }
  searchKeyWord(){
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
    ps.keywordSearch(this.inputData,  (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
            this.position = new kakao.maps.LatLng(data[0].y, data[0].x);
            this.newLocation = {lat: data[0].y, lng:data[0].x};
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
    this.sharedData.geolocation.setNewLocation(this.newLocation);
    //alert("dismissOK");
    this.modalCtrl.dismiss();
  }
}
