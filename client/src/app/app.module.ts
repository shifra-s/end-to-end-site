import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { RecipeService } from './services/recipe.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    AboutComponent,
    RecipeItemComponent,
    RecipeAddComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
