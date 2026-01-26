import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  imports: [],
  templateUrl: './query-params.html',
  styleUrl: './query-params.scss',
})
export class QueryParams {

  serachType : string =''
  filterType: string = ''

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    // this.serachType = this.route.snapshot.queryParams['search'];
    // this.filterType = this.route.snapshot.queryParams['filter'];

    this.route.queryParamMap.subscribe((params) =>{
      this.serachType = params.get('search') || '';
      this.filterType = params.get('filters') || '';
    })
  }

}
