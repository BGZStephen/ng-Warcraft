import { Component, OnInit } from '@angular/core';
import { QuestSearchService } from "../../../services/api/barrel"

@Component({
  selector: 'wow-api-quest',
  templateUrl: './api-quest.component.html',
  styleUrls: ['./api-quest.component.css', '../shared/shared.css']
})
export class ApiQuestComponent implements OnInit {

  constructor(private questApiSearch: QuestSearchService) { }

  questResult: object;

  getQuest(id) {
    this.questApiSearch.getQuest(id)
    .subscribe(res => {
      this.questResult = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
