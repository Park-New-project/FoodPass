import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnerEditComponent } from './owner-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        OwnerEditComponent
    ],
    declarations: [
        OwnerEditComponent
    ],
    providers: [
        
    ]
})
export class OwnerEditComponentModule {}
  