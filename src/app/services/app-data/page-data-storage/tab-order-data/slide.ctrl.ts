import { orderSlide } from './tab-order-slide.enum';

export class TabOrderSlideCtrl {
    orderSlideValue: orderSlide;

    constructor(){
        this.orderSlideValue = orderSlide.waitingOrder;
    }
}