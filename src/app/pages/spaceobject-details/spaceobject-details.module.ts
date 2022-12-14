import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceobjectDetailsPageRoutingModule } from './spaceobject-details-routing.module';

import { SpaceobjectDetailsPage } from './spaceobject-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceobjectDetailsPageRoutingModule
  ],
  declarations: [SpaceobjectDetailsPage]
})
export class SpaceobjectDetailsPageModule {}
