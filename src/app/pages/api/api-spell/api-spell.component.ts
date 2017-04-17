import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-spell',
  templateUrl: './api-spell.component.html',
  styleUrls: ['./api-spell.component.css']
})
export class ApiSpellComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  spellResult: object;

  clearResults() {
    this.spellResult = {}
  }

  searchSpell(id) {
    this.clearResults()
    this.apiService.apiSearch("Spell", id)
    .subscribe(res => {
      this.spellResult = res
      console.log(this.spellResult)
    })
  }

  ngOnInit() {
  }

}
