import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceobjectsPage } from './spaceobjects.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceobjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceobjectsPageRoutingModule {}
