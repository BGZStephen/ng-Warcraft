import { Component, OnInit } from '@angular/core';
import { ApiSearchService } from "../services/api-search.service"

@Component({
  selector: 'wow-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {

  constructor(private apiSearch: ApiSearchService) {

  }

  bossesResults: object;

  clearResults() {
    this.bossesResults = {}
  }

  getBosses() {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getBosses()
    .subscribe(res => {
      this.bossesResults = res
      console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
