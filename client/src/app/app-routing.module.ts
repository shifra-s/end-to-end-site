import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'Page', component: PageComponent},
  {path:'About', component: AboutComponent},
  {path:'Recipes', component: RecipeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
