import { Routes } from '@angular/router';
import { ItemsGridComponent } from './items-grid/items-grid.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        //fara / pe path
        path: 'items', 
        component: ItemsGridComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
];