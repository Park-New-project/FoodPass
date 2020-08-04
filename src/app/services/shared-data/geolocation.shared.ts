import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LocationData } from 'src/app/data/location';
import { Subscription, Observable } from 'rxjs';


const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

export class SharedGeolocation {
    
    newLocation: LocationData;
    currentLocation: LocationData;
    isMyLocation: boolean = false;
  
    locationWatcher: Subscription = null;
    isWatching: boolean = false;

    constructor(private geo: Geolocation){
        this.currentLocation = { lat: 37.4996, lng:127.0264 };
    }

    init() : Promise<LocationData>{
        return this.getLocation();
    }
    getNewLocation(): LocationData{
        return this.newLocation;
    }
    setNewLocation(newLocation){
        this.newLocation = newLocation;
    }

    setCurrentLocation(){
        this.newLocation =this.currentLocation;
    }
    
    getLocation() : Promise<LocationData> {
        return new Promise((resolve, reject) =>{

            this.geo.getCurrentPosition(geoOptions).then(val =>{
                const coords = val.coords;
                this.currentLocation.lat = coords.latitude;
                this.currentLocation.lng = coords.longitude;
                
                this.isMyLocation = true;

                console.log('get current location');
                resolve(this.currentLocation);
        
            }).catch(e =>{
                
                console.log('cannot get current location');
                console.log(e);
                resolve(e);
            });

        });

    }


    watchLocation(pipe? : (location : LocationData) => void){
        if(this.isWatching){
            return;
        }
        this.isWatching = true;
        this.locationWatcher = this.geo.watchPosition(geoOptions).subscribe(data =>{
            
            console.log('watching current location');
            const coords = data.coords;
            this.currentLocation.lat = coords.latitude;
            this.currentLocation.lng = coords.longitude;

            if(pipe != null){
                pipe(this.currentLocation);
            }
            console.log(this.currentLocation);
            
        }, err =>{
            this.isWatching = false;
            console.log(err);
        });
    }

    stopWatching(){
        console.log('stop watching location');
        this.locationWatcher.unsubscribe();
        this.isWatching = false;
    }
}