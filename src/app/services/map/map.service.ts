import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
  map : any;
  constructor() { }

  init(map: any){
    this.map = map;
  }
}
