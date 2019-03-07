import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private data: BehaviorSubject<any[]>;
  private currentSubscription: Subscription;

  constructor(private HttpClient: HttpClient) { 
    //add behavoral subject here
    this.data = new BehaviorSubject<any[]>([]);

    setInterval(() => {
      if (this.currentSubscription && !this.currentSubscription.closed) {
        this.currentSubscription.unsubscribe();
      }

      this.currentSubscription = this.HttpClient.get<any>(environment.serverUrl+ 'recipes').subscribe(a => {
        this.data.next(a);
      })

    }, 2 * 1000)
    
  }

  post(recipe: Recipe): Observable<any> {
    return this.HttpClient.post<any[]>(environment.serverUrl + 'recipes', recipe)
  }

  get(): Observable<any> {
      return this.data;
    
  }

}