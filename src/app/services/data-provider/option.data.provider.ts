import { OptionData } from 'src/app/data/option';
import { Injectable } from '@angular/core';
import { ADataProvider } from './data.provider.abstract';

@Injectable()
export class OptionDataProvider extends ADataProvider{
    getListByFoodtruckMenuId(foodtruckId: number, menuId: number) : Promise<OptionData[]>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve([]);
        })
    }
    getById(id: number) : Promise<OptionData>{
        return new Promise((resolve, reject) =>{
            //가져오기
            resolve(null);
        })
    }
}