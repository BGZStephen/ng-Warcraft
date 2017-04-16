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
  zoneResult: object;

  questResult: object;

  realmStatusResults: object;

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

  getZone(id) {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getZone(id)
    .subscribe(res => {
      this.zoneResult = res
      // console.log(this.zonesResults)
    })
  }

  getQuest(id) {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getQuest(id)
    .subscribe(res => {
      this.questResult = res
      // console.log(this.questResult)
    })
  }

  getRealmStatus() {
    this.clearResults() // clear results to allow for multiple searches
    this.apiSearch.getRealmStatus()
    .subscribe(res => {
      this.realmStatusResults = res
      console.log(this.realmStatusResults)
    })
  }

  ngOnInit() {
  }

}
