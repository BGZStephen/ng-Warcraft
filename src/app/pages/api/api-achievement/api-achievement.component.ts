import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"


@Component({
  selector: 'wow-api-achievement',
  templateUrl: './api-achievement.component.html',
  styleUrls: ['./api-achievement.component.css']
})
export class ApiAchievementComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  achievementResult: object;

  clearResults() {
    this.achievementResult = {}
  }

  searchAchievement(id) {
    this.clearResults()
    this.apiService.apiSearch("Achievement", id)
    .subscribe(res => {
      this.achievementResult = res
      console.log(this.achievementResult)
    })
  }

  ngOnInit() {
  }

}
