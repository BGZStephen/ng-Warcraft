import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"


@Component({
  selector: 'wow-api-zones',
  templateUrl: './api-zones.component.html',
  styleUrls: ['./api-zones.component.css', '../shared/shared.css']
})
export class ApiZonesComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  zonesResults: object;
  zoneResult: object;

  clearResults() {
    this.zonesResults = null,
    this.zoneResult = null
  }

  searchZones() {
    this.clearResults()
    this.apiService.apiSearch("Zone")
    .subscribe(res => {
      this.zonesResults = res
      console.log(this.zonesResults)
    })
  }

  searchZone(id) {
    this.clearResults()
    this.apiService.apiSearch("Zone", id)
    .subscribe(res => {
      this.zoneResult = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
