import { Component } from '@angular/core';
import { AdminRoutingModule } from "../admin/admin-routing-module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
