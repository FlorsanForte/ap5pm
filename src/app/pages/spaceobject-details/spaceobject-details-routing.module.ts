import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceobjectDetailsPage } from './spaceobject-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceobjectDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceobjectDetailsPageRoutingModule {}
