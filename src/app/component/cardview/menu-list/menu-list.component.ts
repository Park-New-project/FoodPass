import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input() menuList: string;
  @Input() foodtruck_id:number;
  @Input() foodtruck_name:string;
  @Input() foodtruck_inform:string;
  @Input() foodtruck_Grade:number;

  @Input() id:number;
  @Input() name:string;
  @Input() inform:string;
  @Input() price:number;
  @Input() menuImage:string;

  constructor() { 
  
  }

  ngOnInit() {}

}
