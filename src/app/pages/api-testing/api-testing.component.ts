import { Component, OnInit } from '@angular/core';
import { ApiSearchService } from "../../services/api-search.service"

@Component({
  selector: 'wow-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {

  constructor(private apiSearch: ApiSearchService) {

  }

  bossesResults: object;
  bossResult: object;
  zonesResults: object;
  questsResults: object;

  clearResults() {
    this.bossesResults = {}
  }

  getBosses() {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getBosses()
    .subscribe(res => {
      this.bossesResults = res
      // console.log(this.bossesResults)
    })
  }

  getBoss(id) {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getBoss(id)
    .subscribe(res => {
      this.bossResult = res
      console.log(this.bossResult)
    })
  }

  getZones() {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getZones()
    .subscribe(res => {
      this.zonesResults = res
      // console.log(this.zonesResults)
    })
  }

  getQuests() {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getQuests()
    .subscribe(res => {
      this.questsResults = res
      console.log(this.questsResults)
    })
  }

  ngOnInit() {
  }

}