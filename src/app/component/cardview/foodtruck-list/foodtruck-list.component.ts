import { Component, OnInit, Input } from '@angular/core';
import { FoodtruckData } from 'src/app/data/foodtruck';

@Component({
  selector: 'cardview-foodtruck-list',
  templateUrl: './foodtruck-list.component.html',
  styleUrls: ['./foodtruck-list.component.scss'],
})
export class CardviewComponent implements OnInit {
  
  @Input() name:string;
  @Input() locate:string;
  @Input() inform:string;
  @Input() wating: number;
  @Input() grade:number;
  @Input() notice:string;
  @Input() distance:number;
  @Input() truckImage:string;

//  @Input() truckIndex : number;


  constructor(
    
  ) { }

  ngOnInit() {
    
    
  }
  // get truck(): TruckOrder{
  //   return this.truckCtrl.items[this.truckIndex] as TruckOrder;
  // }
  // get foodtruck(){
  //   return this.
  // }
}