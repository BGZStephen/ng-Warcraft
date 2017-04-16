import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wow-api-realm-status',
  templateUrl: './api-realm-status.component.html',
  styleUrls: ['./api-realm-status.component.css', '../shared/shared.css']
})
export class ApiRealmStatusComponent implements OnInit {

  constructor() { }

  realmStatusResults: object;

  ngOnInit() {
  }

}
