import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-challenge',
  templateUrl: './api-challenge.component.html',
  styleUrls: ['./api-challenge.component.css']
})
export class ApiChallengeComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  challengeResult: object;

  clearResults() {
    this.challengeResult = null
  }

  searchChallenge(id) {
    this.clearResults()
    this.apiService.apiSearch("Challenge", id)
    .subscribe(res => {
      this.challengeResult = res
      console.log(this.challengeResult)
    })
  }

  ngOnInit() {
  }

}
