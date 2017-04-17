import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-mount',
  templateUrl: './api-mount.component.html',
  styleUrls: ['./api-mount.component.css', '../shared/shared.css']
})
export class ApiMountComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  mountResults: object;

  clearResults() {
    this.mountResults = null
  }

  searchMounts() {
    this.clearResults()
    this.apiService.apiSearch("Mount")
    .subscribe(res => {
      this.mountResults = res
      console.log(this.mountResults)
    })
  }

  trueFalseStyle(result) {
    if(result == true) {
      return {"color": "green"}
    } else {
      return {"color": "red"}
    }
  }

  ngOnInit() {
  }

}
