import { Component, OnInit } from '@angular/core';
import { BossSearchService } from "../../../services/api/boss-search.service"

@Component({
  selector: 'wow-api-bosses',
  templateUrl: './api-bosses.component.html',
  styleUrls: ['./api-bosses.component.css', '../shared/shared.css']
})
export class ApiBossesComponent {

  constructor(private bossApiSearch: BossSearchService) { }

  bossesResults: object;
  bossResult: object;

  getBosses() {
    this.bossApiSearch.getBosses()
    .subscribe(res => {
      this.bossesResults = res
      // console.log(this.bossesResults)
    })
  }

  getBoss(id) {
    this.bossApiSearch.getBoss(id)
    .subscribe(res => {
      this.bossResult = res
      console.log(this.bossResult)
    })
  }

}
