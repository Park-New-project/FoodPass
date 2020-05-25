import { TabOrderWaitingListCtrl } from './waitingList.ctrl';
import { TabOrderHistoryListCtrl } from './orderHistoryList.ctrl';
import { TabOrderSlideCtrl } from './slide.ctrl';
import { HttpClient } from '@angular/common/http';
import { DataControllerService } from '../../data-controller/data-controller.service';


export class TabOrderData {

    waitingCtrl : TabOrderWaitingListCtrl
    historyCtrl : TabOrderHistoryListCtrl;
    slideCtrl : TabOrderSlideCtrl;

    constructor(dataCtrl : DataControllerService) {
        this.waitingCtrl = new TabOrderWaitingListCtrl(dataCtrl);
        this.historyCtrl = new TabOrderHistoryListCtrl();
        this.slideCtrl = new TabOrderSlideCtrl();
    }

}