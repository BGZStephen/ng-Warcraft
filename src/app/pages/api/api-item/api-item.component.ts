import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wow-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.css', '../shared/shared.css']
})
export class ApiItemComponent implements OnInit {

  constructor() { }

  itemResult: object;

  ngOnInit() {
  }

}
