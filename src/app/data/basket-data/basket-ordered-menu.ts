
import { OrderedMenuData } from 'src/app/data/ordered-menu';
import { MenuData } from 'src/app/data/menu';
import { OptionData } from 'src/app/data/option';
import { CheckValue, CheckboxValue } from './checkbox-value';

export class BasketOrderedMenu extends CheckValue implements OrderedMenuData {
    menuinfo: MenuData;
    optioninfo: OptionData;
    amount: number;

    constructor(parent: CheckboxValue, orderedMenuData: OrderedMenuData = null){
        super(parent);
        if(orderedMenuData != null){
            this.menuinfo = orderedMenuData.menuinfo;
            this.optioninfo = orderedMenuData.optioninfo;
            this.amount = orderedMenuData.amount;
        }
    }

    extractData(){
        let orderedMenuData : OrderedMenuData = {
            menuinfo : this.menuinfo,
            optioninfo : this.optioninfo,
            amount : this.amount
        };

        return orderedMenuData;
    }
}