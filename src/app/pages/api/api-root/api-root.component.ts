import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-root',
  templateUrl: './api-root.component.html',
  styleUrls: ['./api-root.component.css', '../shared/shared.css']
})
export class ApiRootComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  ngOnInit() {
  }

}
