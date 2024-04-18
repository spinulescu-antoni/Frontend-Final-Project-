import { Component, OnInit } from '@angular/core';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-grid',
  standalone: true,
  imports: [MatGridListModule, MatGridTile, ItemCardComponent, CommonModule],
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.css'
  
})
export class ItemsGridComponent implements OnInit {
  breakpoint: number = 3;
  cards: string[] = ["", "", "", "", ""];
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
  }
  onResize(event: any) {
    if (event.target.innerWidth > 1300 ) {
      this.breakpoint =  3;
    } else if(event.target.innerWidth > 500 && event.target.innerWidth <= 1300){
      this.breakpoint = 2;
    } else if (event.target.innerWidth <= 500){
      this.breakpoint = 1;
    }
  }

  dogs: string[] = [
    "Shiba Inu1",
    "Shiba Inu2",
    "Shiba Inu3",
    "Shiba Inu4",
    "Shiba Inu5",
    "Shiba Inu6",
    "Shiba Inu7",
    "Shiba Inu8",
    "Shiba Inu9",
    "Shiba Inu10"
  ]
}
