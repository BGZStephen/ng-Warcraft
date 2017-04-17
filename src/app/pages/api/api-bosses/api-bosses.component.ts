import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-bosses',
  templateUrl: './api-bosses.component.html',
  styleUrls: ['./api-bosses.component.css', '../shared/shared.css']
})
export class ApiBossesComponent {

  constructor(private apiService: WowApiService) { }

  bossesResults: object;
  bossResult: object;

  clearResults() {
    this.bossesResults = null,
    this.bossResult = null
  }

  searchBoss(id) {
    this.clearResults()
    this.apiService.apiSearch("Boss", id)
    .subscribe(res => {
      this.bossResult = res
      console.log(this.bossResult)
    })
  }

  searchBosses() {
    this.clearResults()
    this.apiService.apiSearch("Boss")
    .subscribe(res => {
      this.bossesResults = res
      console.log(this.bossesResults)
    })
  }

}
