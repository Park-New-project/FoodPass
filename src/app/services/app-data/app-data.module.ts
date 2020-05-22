import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDataStorageService } from './page-data-storage/page-data-storage.service';
import { PageControllerService } from './page-controller/page-controller.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    PageDataStorageService,
    PageControllerService,
  ]
})
export class AppDataModule { }
