import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage {
  favouriteSpaceObjects: any[] = [];

  constructor(private dataService: DataService) { 
    this.loadFavourite();
  }

  async loadFavourite() {
    this.favouriteSpaceObjects = await this.dataService.getData();
  }

  async addData(item: any) {
    await this.dataService.addData(item);
    this.loadFavourite();
  }

  async removeItem(index: any) {
    this.dataService.removeItem(index);
    this.favouriteSpaceObjects.splice(index, 1);
  }
}
