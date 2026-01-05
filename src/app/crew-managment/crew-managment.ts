import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crew-managment',
  imports: [],
  templateUrl: './crew-managment.html',
  styleUrl: './crew-managment.scss',
})
export class CrewManagment {
  @Input() mgs: string = '';

  @Output() notifyParent = new EventEmitter<string>();

  sendMgs(){
    this.notifyParent.emit('Message from Crew Managment to Crew Component');
  }

}
