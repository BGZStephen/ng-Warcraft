import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-pet',
  templateUrl: './api-pet.component.html',
  styleUrls: ['./api-pet.component.css', '../shared/shared.css']
})
export class ApiPetComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  petsResults: object;
  petAbilityResults: object;
  petSpeciesResults: object;
  petStatsResults: object;

  clearResults() {
    this.petsResults = null,
    this.petAbilityResults = null,
    this.petSpeciesResults = null,
    this.petStatsResults = null
  }

  searchPets() {
    this.clearResults()
    this.apiService.apiSearch("Pet")
    .subscribe(res => {
      this.petsResults = res
      console.log(this.petsResults)
    })
  }

  searchPetAbility(id) {
    this.clearResults()
    this.apiService.apiSearch("PetAbility", id)
    .subscribe(res => {
      this.petAbilityResults = res
      console.log(this.petAbilityResults)
    })
  }

  searchPetSpecies(id) {
    this.clearResults()
    this.apiService.apiSearch("PetSpecies", id)
    .subscribe(res => {
      this.petSpeciesResults = res
      console.log(this.petSpeciesResults)
    })
  }

  ngOnInit() {
  }

}
