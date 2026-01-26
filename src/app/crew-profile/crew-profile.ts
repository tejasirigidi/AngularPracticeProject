import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew-profile',
  imports: [],
  templateUrl: './crew-profile.html',
  styleUrl: './crew-profile.scss',
})
export class CrewProfile implements OnInit{

  id : string | null=null;

  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })
  }

}
