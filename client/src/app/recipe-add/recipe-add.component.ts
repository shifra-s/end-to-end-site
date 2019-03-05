import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addRecipe(name, instructions) {

    const recipe = <Recipe>{
      name: name.value,
      instructions: instructions.value
    }

    return this.recipeService.post(recipe).subscribe(res => {
      console.log(res);
    });
  }
}
