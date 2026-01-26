import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp-service';
import { User } from '../User';

@Component({
  selector: 'app-emp-list',
  imports: [],
  templateUrl: './emp-list.html',
  styleUrl: './emp-list.scss',
})
export class EmpList implements OnInit {

  public user: User[]= [];

  constructor(private empData : EmpService){}

  ngOnInit(){
      this.empData.getEmployees()
      .subscribe(data => {
        console.log('EMPLOYEES:', data); // optional debug
        this.user = data;
      });
  }

}
