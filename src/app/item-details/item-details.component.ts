import { Component, OnInit, inject } from '@angular/core';
import { ItemsService } from '../items-service.service';
import { publishFacade } from '@angular/compiler';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import Item from '../types/Item';
import { UpdateItemDialogComponent } from '../update-item-dialog/update-item-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {
  itemId = Number(this.route.snapshot.params['id']);
  item!: Item;
  // url =""

  constructor(private service: ItemsService, private route: ActivatedRoute, private dialog: MatDialog){
    
  }
  ngOnInit(): void {
    this.getItemById();
  }

    public getItemById(){
      this.service.getItemById(this.itemId).subscribe((result) => {
        console.log(result);
        this.item = result;
    });
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(UpdateItemDialogComponent, {
        width: '700px',
        data: this.item
      });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   // this.service.updateItem()
      // });
    }
  }

