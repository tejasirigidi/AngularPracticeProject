import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUser } from './add-user/add-user';
import { EditUser } from './edit-user/edit-user';

const routes: Routes = [
  {
    path: '',
    component: EditUser
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
