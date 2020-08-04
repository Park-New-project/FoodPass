import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pick-menu-option',
  templateUrl: './pick-menu-option.component.html',
  styleUrls: ['./pick-menu-option.component.scss'],
})
export class PickMenuOptionComponent implements OnInit {
  @Input() id:number;
  @Input() name:string;
  @Input() extraPrice:number;
  isCheckedValue: string;

  constructor() { 
  }

  ngOnInit() {
  }



}
