import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodtruckInfoPage } from './foodtruck-info.page';
import { MenuInfoPage } from '../menu-info/menu-info.page';

const routes: Routes = [
  {
    path: '',
    component: FoodtruckInfoPage
  },
  // {
  //   path: 'menu/:id',
  //   // component: MenuInfoPage
  //   loadChildren: () => import('../menu-info/menu-info.module').then( m => m.MenuInfoPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodtruckInfoPageRoutingModule {}
