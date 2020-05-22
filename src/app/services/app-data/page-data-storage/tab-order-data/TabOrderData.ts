import { TabOrderWaitingListCtrl } from './waitingList.ctrl';
import { TabOrderHistoryListCtrl } from './orderHistoryList.ctrl';
import { TabOrderSlideCtrl } from './slide.ctrl';


export class TabOrderData {

    waitingCtrl : TabOrderWaitingListCtrl
    historyCtrl : TabOrderHistoryListCtrl;
    slideCtrl : TabOrderSlideCtrl;

    constructor() {
        this.waitingCtrl = new TabOrderWaitingListCtrl();
        this.historyCtrl = new TabOrderHistoryListCtrl();
        this.slideCtrl = new TabOrderSlideCtrl();
    }

}