import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service'
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    console.log('RecipeListComponent instantiated');
   }

  ngOnInit() {
    
    console.log('RecipeListComponent ngOnInit')

    this.recipeService.get().subscribe(recipesData => {
      this.recipes = <Recipe[]>recipesData;
    });
  }

}
