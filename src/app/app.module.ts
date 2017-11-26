import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaViewComponent } from './pizza/pizzaView.component';
import { PizzaListComponent } from './pizza/pizzaList.component';
import { PizzaFormComponent } from './pizza/pizzaForm.component';
import { ReactiveFormsModule } from '@angular/forms';

import { IngredientListComponent } from './ingredient/ingredientList.component';
import { IngredientFormComponent } from './ingredient/ingredientForm.component';

import { ClarityModule } from "clarity-angular";

import { AppRoutingModule } from './app-routing.module';

import { PizzaService } from './services/pizza.service';
import { IngredientService } from './services/ingredient.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaViewComponent,
    PizzaListComponent,
    PizzaFormComponent,
    IngredientListComponent,
    IngredientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule.forRoot()
  ],
  providers: [PizzaService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
