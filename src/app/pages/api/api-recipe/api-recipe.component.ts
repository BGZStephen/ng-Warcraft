import { Component, OnInit } from '@angular/core';
import { WowApiService } from "../../../services/api/wow-api.service"

@Component({
  selector: 'wow-api-recipe',
  templateUrl: './api-recipe.component.html',
  styleUrls: ['./api-recipe.component.css', '../shared/shared.css']
})
export class ApiRecipeComponent implements OnInit {

  constructor(private apiService: WowApiService) { }

  recipeResult: object;

  clearResults() {
    this.recipeResult = null
  }

  searchRecipe(id) {
    this.clearResults()
    this.apiService.apiSearch("Recipe", id)
    .subscribe(res => {
      this.recipeResult = res
      console.log(this.recipeResult)
    })
  }

  ngOnInit() {
  }

}
