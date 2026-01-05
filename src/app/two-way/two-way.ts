import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.scss',
})
export class TwoWay {
  name: string = '';
  isChecked: boolean = false;
  selectedOption: string = '';
  dropDown: string = '';
  details: string = '';

}
