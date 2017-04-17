import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"


@Component({
  selector: 'wow-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.css', '../shared/shared.css']
})
export class ApiItemComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  itemResult: object;

  clearResults() {
    this.itemResult = null
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
