import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza/pizzaList.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaFormComponent } from './pizza/pizzaForm.component';
import { IngredientListComponent } from './ingredient/ingredientList.component';
import { IngredientFormComponent } from './ingredient/ingredientForm.component';

const routes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'pizza/add', component: PizzaFormComponent },
  { path: 'pizza/edit/:id', component: PizzaFormComponent },
  { path: 'pizza/:id', component: PizzaComponent },
  { path: 'ingredient', component: IngredientListComponent },
  { path: 'ingredient/add', component: IngredientFormComponent },
  { path: 'ingredient/edit/:id', component: IngredientFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
