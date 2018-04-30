import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/services/details.service';
import { Subscription } from 'rxjs/Subscription';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-card',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [ 
        animate(500, style({opacity:0})) 
      ])
    ])
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  showMore: any;
  currentItem: any;
  constructor(private detailServ: DetailsService) {
    this.showMore = 0;
    this.detailServ.getCurrent().subscribe(data => {
      this.currentItem = data;
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
