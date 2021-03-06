import { WaitingData } from './waiting';
import { LocationData } from './location';
import { FoodtruckLocalData } from './foodtruck-local';

export interface FoodtruckData {
    id: number,
    name: string,

    introduction:string,     //정보
    notice: string,    //공지
    
    imgSrc?: string;    //이미지

    location? : LocationData,   //위치
    localData?: FoodtruckLocalData,   //로컬데이터 : sign, distance
    
    waiting?: WaitingData,    //웨이팅
    rating?: number,      //평점
}