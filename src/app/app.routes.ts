import { Routes } from '@angular/router';
import { AddUser } from './admin/add-user/add-user';
import { Structural } from './structural/structural';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren:() => import('./admin/admin-module').then(m => m.AdminModule)
    },
    {
        path: 'add-user',
       loadComponent:() => import('./admin/add-user/add-user').then(c => c.AddUser)
        //component: AddUser
    },
    {
        path: 'two-way',
        loadComponent:() => import('./two-way/two-way').then(c => c.TwoWay)
    },
    
    {
        path: 'structural',
        component: Structural

    }

    
];
