import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-pet',
  templateUrl: './api-pet.component.html',
  styleUrls: ['./api-pet.component.css', '../shared/shared.css']
})
export class ApiPetComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  petResult: object;
  petAbilityResult: object;
  petSpeciesResult: object;
  petStatsResult: object;

  clearResults() {
    this.petResult = null,
    this.petAbilityResult = null,
    this.petSpeciesResult = null,
    this.petStatsResult = null
  }

  searchPet() {
    this.clearResults()
    this.apiService.apiSearch("Pet")
    .subscribe(res => {
      this.petResult = res
      console.log(this.petResult)
    })
  }

  searchPetAbilities(id) {
    this.clearResults()
    this.apiService.apiSearch("PetAbility", id)
    .subscribe(res => {
      this.petAbilityResult = res
      console.log(this.petAbilityResult)
    })
  }

  searchPetSpecies(id) {
    this.clearResults()
    this.apiService.apiSearch("PetSpecies", id)
    .subscribe(res => {
      this.petSpeciesResult = res
      console.log(this.petSpeciesResult)
    })
  }

  searchPetStats(id) {
    this.clearResults()
    this.apiService.apiSearch("PetStats", id)
    .subscribe(res => {
      this.petStatsResult = res
      console.log(this.petStatsResult)
    })
  }

  ngOnInit() {
  }

}
