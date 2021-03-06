import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';
import { Subscription } from 'rxjs';


const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

export class SharedGeolocation {
    currentLocation: LocationData;
    isMyLocation: boolean = false;
  
    locationWatcher: Subscription = null;

    constructor(private geo: Geolocation){
        this.currentLocation = { lat: 37.4996, lng:127.0264 };
    }

    init() : Promise<Coordinates>{
        return this.getLocation();
    }
    
    getLocation() : Promise<Coordinates> {
        return new Promise((resolve, reject) =>{

            this.geo.getCurrentPosition(geoOptions).then(val =>{
                const coords = val.coords;
                // this.currentLocation.lat = coords.latitude;
                // this.currentLocation.lng = coords.longitude;
                
                this.isMyLocation = true;

                console.log('get current location');
                resolve(coords);
        
            }).catch(e =>{
                
                console.log('cannot get current location');
        
                resolve(e);
            });

        });

    }


    watchLocation(pipe? : Function){
        this.locationWatcher = this.geo.watchPosition(geoOptions).subscribe(data =>{
            
            console.log('watching current location');
            const coords = data.coords;
            this.currentLocation.lat = coords.latitude;
            this.currentLocation.lng = coords.longitude;

            if(pipe != null){
                pipe(coords);
            }
            console.log(this.currentLocation);
        });
    }
}