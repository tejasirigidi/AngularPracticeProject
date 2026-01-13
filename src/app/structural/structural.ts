import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bundlerModuleNameResolver } from 'typescript';

@Component({
  selector: 'app-structural',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural.html',
  styleUrl: './structural.scss',
})
export class Structural {

  a = 10
  b=5

  items = [1,2,3,4,5]

  userrole: string = ""
selected = true
back = "rgb(45, 160, 122)"

  togglebutton(){
    this.selected = !this.selected
  }

  toggleSTyle(){
    this.back = "rgb(117, 92, 140)"
  }

}
