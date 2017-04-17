import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"


@Component({
  selector: 'wow-api-realm-status',
  templateUrl: './api-realm-status.component.html',
  styleUrls: ['./api-realm-status.component.css', '../shared/shared.css']
})
export class ApiRealmStatusComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  realmStatusResults: object;

  clearResults() {
    this.realmStatusResults = {}
  }

  searchRealmStatus() {
    this.clearResults()
    this.apiService.apiSearch("RealmStatus")
    .subscribe(res => {
      this.realmStatusResults = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
