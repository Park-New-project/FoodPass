import { OptionData } from 'src/app/data/option';

export class TabHomeOptionListCtrl {
    optionList : OptionData[];

    getOptionList(foodtruckId: number, menuId: number) : OptionData[]{
        let options : OptionData[] = [{
          id: 1001,
          name: "기본",
          extraPrice: 0
        },
        {
          id: 1002,
          name: "고오급",
          extraPrice: 500
        }
      ];
    
        return options;
    }
}