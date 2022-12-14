import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceobjectsPageRoutingModule } from './spaceobjects-routing.module';

import { SpaceobjectsPage } from './spaceobjects.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceobjectsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SpaceobjectsPage]
})
export class SpaceobjectsPageModule {}
