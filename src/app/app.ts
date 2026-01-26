import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {Crew} from './crew/crew';
import { EmpList } from "./emp-list/emp-list";
import { EmpDetails } from "./emp-details/emp-details";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, RouterModule, EmpList, EmpDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crew-management');
}
