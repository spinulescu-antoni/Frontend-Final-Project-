import { Routes } from '@angular/router';
import { ItemsGridComponent } from './items-grid/items-grid.component';
import { UsersComponent } from './users/users.component';
import { AdditemComponent } from './additem/additem.component';

export const routes: Routes = [
    {
        //fara / pe path
        path: 'items', 
        component: ItemsGridComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'create-item',
        component: AdditemComponent
    }
];