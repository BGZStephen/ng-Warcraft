import { Component, OnInit } from '@angular/core';
import { ItemSearchService } from "../../../services/api/barrel"

@Component({
  selector: 'wow-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.css', '../shared/shared.css']
})
export class ApiItemComponent implements OnInit {

  constructor(private itemApiSearch: ItemSearchService) { }

  itemResult: object;

  getItem(id) {
    this.itemApiSearch.getItem(id)
    .subscribe(res => {
      this.itemResult = res
      // console.log(this.bossesResults)
    })
  }

  ngOnInit() {
  }

}
