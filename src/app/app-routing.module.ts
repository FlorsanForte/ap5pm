import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'spaceobjects',
    pathMatch: 'full'
  },
  {
    path: 'spaceobjects',
    loadChildren: () => import('./pages/spaceobjects/spaceobjects.module').then( m => m.SpaceobjectsPageModule)
  },
  {
    path: 'spaceobjects/:id',
    loadChildren: () => import('./pages/spaceobject-details/spaceobject-details.module').then( m => m.SpaceobjectDetailsPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
