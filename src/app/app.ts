import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {Crew} from './crew/crew';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Crew],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crew-management');
}
