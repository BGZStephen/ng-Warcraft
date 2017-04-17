import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-auction',
  templateUrl: './api-auction.component.html',
  styleUrls: ['./api-auction.component.css', '../shared/shared.css']
})
export class ApiAuctionComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  auctionResult: object;

  clearResults() {
    this.auctionResult = {}
  }

  searchAuction(id) {
    this.clearResults()
    this.apiService.apiSearch("Auction", id)
    .subscribe(res => {
      this.auctionResult = res
      console.log(this.auctionResult)
    })
  }

  ngOnInit() {
  }

}
