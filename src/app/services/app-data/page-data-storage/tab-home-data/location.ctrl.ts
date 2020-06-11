import { LocationData } from 'src/app/data/location';

export class TabHomeLocationCtrl {
    locationData: LocationData;
  
    constructor() {
      this.locationData ={ lat: 36.3504563, lng:127.3848183 };
    
    }
    setLocation(location){
      this.locationData = location;
    }
   getLocation() : LocationData{
      return this.locationData;
    }
  
}