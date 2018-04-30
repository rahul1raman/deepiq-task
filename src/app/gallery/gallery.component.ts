import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/services/details.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryData: any;
  constructor(private detailServ: DetailsService) {
    this.galleryData = [];
  }

  ngOnInit() {
    this.detailServ.getData().subscribe(
      response => {
        this.galleryData = response;
        console.log(this.galleryData);
      },
      error => {
        console.error(error);
      }
    );
  }

  sendItem(item) {
    console.log(item);
    this.detailServ.fetchCurrent(item);
  }

  applyStyle(image) {
    const styles =  {
      'background-image' : 'url("image")'
    };
    return styles;
  }

}
