import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-pet',
  templateUrl: './api-pet.component.html',
  styleUrls: ['./api-pet.component.css']
})
export class ApiPetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
