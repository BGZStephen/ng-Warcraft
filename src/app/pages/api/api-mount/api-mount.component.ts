import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-mount',
  templateUrl: './api-mount.component.html',
  styleUrls: ['./api-mount.component.css']
})
export class ApiMountComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  mountResult: object;

  clearResults() {
    this.mountResult = {}
  }

  searchMount(id) {
    this.clearResults()
    this.apiService.apiSearch("Mount")
    .subscribe(res => {
      this.mountResult = res
      console.log(this.mountResult)
    })
  }

  ngOnInit() {
  }

}
