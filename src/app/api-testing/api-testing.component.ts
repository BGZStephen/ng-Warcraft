import { Component, OnInit } from '@angular/core';
import { ApiSearchService } from "../services/api-search.service"

@Component({
  selector: 'wow-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {

  constructor(private apiSearch: ApiSearchService) {
    this.apiSearch.getBosses()
    .subscribe(res => {
      console.log(res)
    })
  }

  ngOnInit() {
  }

}
