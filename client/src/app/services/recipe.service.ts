import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private HttpClient: HttpClient) { }

  post(Recipe: Recipe): Observable<object> {
    return this.HttpClient.post('http://localhost:8888/recipes', Recipe);
  }

  get(): Observable<object> {
    return this.HttpClient.get('http://localhost:8888/recipes');
  }

}