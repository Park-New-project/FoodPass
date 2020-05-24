import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss'],
})
export class CardviewComponent implements OnInit {

  @Input() foodtruckIndex : number;
  
  @Input() name:string;
  @Input() locate:string;
  @Input() inform:string;
  @Input() wating: number;
  @Input() grade:number;
  @Input() notice:string;
  @Input() distance:number;
  @Input() truckImage:string;
  //@Input() foodtruck:FoodtruckData;
  constructor() { }

  ngOnInit() {
    
    
  }

}
