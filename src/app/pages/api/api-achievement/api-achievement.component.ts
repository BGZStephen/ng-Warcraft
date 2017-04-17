import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"


@Component({
  selector: 'wow-api-achievement',
  templateUrl: './api-achievement.component.html',
  styleUrls: ['./api-achievement.component.css']
})
export class ApiAchievementComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  itemResult: object;

  clearResults() {
    this.itemResult = {}
  }

  searchItem(id) {
    this.clearResults()
    this.apiService.apiSearch("Item", id)
    .subscribe(res => {
      this.itemResult = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
