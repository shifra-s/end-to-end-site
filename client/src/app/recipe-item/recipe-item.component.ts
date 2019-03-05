import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
  }

}


// this.activatedRoute.params.subscribe(res => {
//   console.log(res);
//   const id = +res.id;
//   if (id) {
//     this.recipe.get(id).subscribe(recipeData => {
//       this.recipe = <Recipe>recipeData;
//     })
//   }
// });
