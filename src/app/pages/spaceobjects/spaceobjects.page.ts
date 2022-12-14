import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, LoadingController, ToastController } from '@ionic/angular';
import { SpaceobjectService } from 'src/app/services/spaceobject.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-spaceobjects',
  templateUrl: './spaceobjects.page.html',
  styleUrls: ['./spaceobjects.page.scss'],
})

export class SpaceobjectsPage implements OnInit {
  
  favouriteSpaceObjects: any[] = [];
  searchTerm: string = "";
  spaceObjects:any[] = [];

  constructor(private spaceObjectService: SpaceobjectService, 
    private dataService: DataService,
    private loadingCtrl: LoadingController, 
    private toastController: ToastController) { }

  ngOnInit() {
    this.loadSpaceObjects();
    this.loadFavourite();
  }
  
  async loadFavourite() {
    this.favouriteSpaceObjects = await this.dataService.getData();
    //console.log(this.favouriteSpaceObjects);
  }

  async loadSpaceObjects() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.spaceObjectService.getSpaceObjects().subscribe(res => {
      loading.dismiss();
      this.spaceObjects.push(...res.bodies);
      //console.log(res);
    });
  }

  isFavourite(inputName: string) {
    if(this.favouriteSpaceObjects != null && this.favouriteSpaceObjects.length > 0) {
      for (let index = 0; index < this.favouriteSpaceObjects.length; index++) {
        if(this.favouriteSpaceObjects[index].name == inputName) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }
  
  async presentToast(name: string) {
    if(this.isFavourite(name) == false) {
      const toast = await this.toastController.create({
        message: name + ' added to favourites',
        duration: 1500,
        position: 'bottom'
      });

      await toast.present();
    } else {
      const toast = await this.toastController.create({
        message: name + ' is already in favourites',
        duration: 1500,
        position: 'bottom'
      });

      await toast.present();
    }
  }

  async addItem(item: any) {
    if(this.isFavourite(item.name) == false) {
      await this.dataService.addData(item);
      this.favouriteSpaceObjects = await this.dataService.getData();
    }
  }
}
