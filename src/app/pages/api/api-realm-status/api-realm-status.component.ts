import { Component, OnInit } from '@angular/core';
import { RealmStatusSearchService } from "../../../services/api/barrel"

@Component({
  selector: 'wow-api-realm-status',
  templateUrl: './api-realm-status.component.html',
  styleUrls: ['./api-realm-status.component.css', '../shared/shared.css']
})
export class ApiRealmStatusComponent implements OnInit {

  constructor(private realmStatusApiSearch: RealmStatusSearchService) { }

  realmStatusResults: object;

  getRealmStatus() {
    this.realmStatusApiSearch.getRealmStatus()
    .subscribe(res => {
      this.realmStatusResults = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
