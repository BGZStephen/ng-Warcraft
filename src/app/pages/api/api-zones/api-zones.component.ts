import { Component, OnInit } from '@angular/core';
import { ZoneSearchService } from "../../../services/api/barrel"

@Component({
  selector: 'wow-api-zones',
  templateUrl: './api-zones.component.html',
  styleUrls: ['./api-zones.component.css', '../shared/shared.css']
})
export class ApiZonesComponent implements OnInit {

  constructor(private zoneApiSearch: ZoneSearchService) { }

  zonesResults: object;
  zoneResult: object;

  getZones() {
    this.zoneApiSearch.getZones()
    .subscribe(res => {
      this.zonesResults = res
      // console.log(this.bossesResults)
    })
  }

  getZone(id) {
    this.zoneApiSearch.getZone(id)
    .subscribe(res => {
      this.zoneResult = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
