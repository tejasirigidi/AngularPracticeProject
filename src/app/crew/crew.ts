import { Component } from '@angular/core';
import { CrewManagment } from '../crew-managment/crew-managment';

@Component({
  selector: 'app-crew',
  imports: [CrewManagment],
  templateUrl: './crew.html',
  styleUrl: './crew.scss',
})
export class Crew {

   mgsFromParent : string = 'Message from Crew Component Parent';

   mgsFrmChild : string = '';

     mgsReceived(mgs: string){
      this.mgsFrmChild = mgs;
    }
}
