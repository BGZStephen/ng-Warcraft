import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wow-api-zones',
  templateUrl: './api-zones.component.html',
  styleUrls: ['./api-zones.component.css', '../shared/shared.css']
})
export class ApiZonesComponent implements OnInit {

  constructor() { }

  zonesResults: object;
  zoneResult: object;

  ngOnInit() {
  }

}
