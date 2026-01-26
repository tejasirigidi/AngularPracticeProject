import { Routes } from '@angular/router';
import { AddUser } from './admin/add-user/add-user';
import { CrewProfile } from './crew-profile/crew-profile';
import { Structural } from './structural/structural';
import { CrewProfileUser } from './crew-profile-user/crew-profile-user';
import { Dashboard } from './dashboard/dashboard';
import { Settings } from './settings/settings';
import { Overview } from './overview/overview';
import { QueryParams } from './query-params/query-params';
import { NotFound } from './not-found/not-found';
import { EmpList } from './emp-list/emp-list';
import { EmpDetails } from './emp-details/emp-details';
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

    },

    {
        path: 'crewProfile/:id',
        component: CrewProfile
    },
    {
        path: 'crewProfile',
        component: CrewProfileUser,
        outlet: 'primary'
    },

    {
        path:'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'overview',
                component: Overview
            },
            {
                path: 'settings',
                component: Settings
            }
        ]
    },
    {
        path:'queryParams',
        component: QueryParams
    },
    {
        path: 'lazyload',
        loadChildren:() => import('./lazy-load/lazy-load.routes').then(m=>m.LAZY_LOAD_ROUTES)
    },
    {
        path:'test-redirect',
        redirectTo: 'lazyload',
        pathMatch: 'full'
    },
    {
        path:'emplist',
        component: EmpList
    },
    {
        path:'empdetails',
        component: EmpDetails
    }
    // },
    // {
    //     path:'**',
    //     component: NotFound
    // }


    
];
