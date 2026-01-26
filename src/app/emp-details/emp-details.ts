import { Component } from '@angular/core';
import { User } from '../User';
import { EmpService } from '../emp-service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-details',
  imports: [CommonModule],
  templateUrl: './emp-details.html',
  styleUrl: './emp-details.scss',
})
export class EmpDetails {

  public emp: User[]= [];
  
    constructor(private empData : EmpService){}
  
    ngOnInit(){
        this.empData.getEmployees()
        .subscribe(data =>{
           console.log('EMPLOYEES:', data); // optional debug
           this.emp = data;
    });

  }

}
