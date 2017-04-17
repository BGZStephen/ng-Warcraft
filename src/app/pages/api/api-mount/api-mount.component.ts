import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-mount',
  templateUrl: './api-mount.component.html',
  styleUrls: ['./api-mount.component.css']
})
export class ApiMountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
