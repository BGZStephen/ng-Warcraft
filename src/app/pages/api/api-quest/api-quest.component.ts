import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"


@Component({
  selector: 'wow-api-quest',
  templateUrl: './api-quest.component.html',
  styleUrls: ['./api-quest.component.css', '../shared/shared.css']
})
export class ApiQuestComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  questResult: object;

  clearResults() {
    this.questResult = null
  }

  searchQuest(id) {
    this.clearResults()
    this.apiService.apiSearch("Quest", id)
    .subscribe(res => {
      this.questResult = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
