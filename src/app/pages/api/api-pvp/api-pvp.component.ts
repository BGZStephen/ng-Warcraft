import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-pvp',
  templateUrl: './api-pvp.component.html',
  styleUrls: ['./api-pvp.component.css', '../shared/shared.css']
})
export class ApiPvpComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  pvpResult: object;

  clearResults() {
    this.pvpResult = {}
  }

  searchPvp(id) {
    this.clearResults()
    this.apiService.apiSearch("PVP", id)
    .subscribe(res => {
      this.pvpResult = res
      console.log(this.pvpResult)
    })
  }

  ngOnInit() {
  }

}
