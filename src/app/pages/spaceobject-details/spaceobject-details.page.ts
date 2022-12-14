import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceobjectService } from 'src/app/services/spaceobject.service';

@Component({
  selector: 'app-spaceobject-details',
  templateUrl: './spaceobject-details.page.html',
  styleUrls: ['./spaceobject-details.page.scss'],
})
export class SpaceobjectDetailsPage implements OnInit {
  spaceObject:any = null;

  constructor(private route: ActivatedRoute, private spaceObjectService: SpaceobjectService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.spaceObjectService.getSpaceObjectDetails(id).subscribe(res => {
        console.log(res);
        this.spaceObject = res;
      });
    }
  }

}
