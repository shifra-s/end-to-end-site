import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipeModel: Recipe;

  constructor(private recipeService: RecipeService) {
    //initialize empty array
    this.recipeModel = <Recipe>{};
   }

  ngOnInit() {
  }

  addRecipe() {

    const subs = this.recipeService.post(this.recipeModel).subscribe(res => {
      //console.log(res);
      subs.unsubscribe();
    });
  }
}
