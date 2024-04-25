import { Routes } from '@angular/router';
import { ItemsGridComponent } from './items-grid/items-grid.component';
import { UsersComponent } from './users/users.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FormLoginComponent } from './form-login/form-login.component';

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
    },
    {
        path: 'items/:id',
        component: ItemDetailsComponent
    },
    {
        path: 'login',
        component: FormLoginComponent
    }
];