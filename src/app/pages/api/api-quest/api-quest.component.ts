import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wow-api-quest',
  templateUrl: './api-quest.component.html',
  styleUrls: ['./api-quest.component.css', '../shared/shared.css']
})
export class ApiQuestComponent implements OnInit {

  constructor() { }

  questResult: object;

  ngOnInit() {
  }

}
