import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PizzaService } from '../services/pizza.service';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'Rxjs';

@Component({
  selector: 'app-pizzaForm',
  templateUrl: './pizzaForm.component.html',
})
export class PizzaFormComponent implements OnInit {

  private formPizza: FormGroup;
  private id: number;
  private formModel: any;
  private ingredients: any;
  private listCheckedIngredients = [];
  private listIngredients = [];

  constructor(private route: ActivatedRoute, private router: Router, private pizzaService: PizzaService, private ingredientService: IngredientService) { }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.formPizza = new FormGroup({
      _id: new FormControl(""),
      name: new FormControl("", Validators.required),
      desc: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      picture: new FormControl("", Validators.required),
      ingredients: new FormControl("", Validators.required),
    });
    if (this.id) {
      Observable.forkJoin([
        this.pizzaService.getOne(this.id),
        this.ingredientService.get()
      ])
        .subscribe(data => {
          console.log(data);
          this.ingredients = data[1];
          console.log(data[0].ingredients);
          data[0].ingredients.forEach((ingredient) => {
            this.listCheckedIngredients.push(ingredient._id);
          })
          data[0].ingredients = this.listCheckedIngredients;
          this.listIngredients = this.ingredients;
          this.listIngredients.forEach((ingredient) => {
            if (data[0].ingredients.indexOf(ingredient._id) != -1) {
              ingredient.checked = true;
            } else {
              ingredient.checked = false;
            }
          })
          this.formPizza.patchValue(data[0]);
      });
    } else {
      this.ingredientService.get().subscribe(
        data => this.ingredients = data
      );
    }
  }

  onSubmit() {
    this.formModel = this.formPizza.value;
    if (this.id) {
      this.pizzaService.edit(this.formModel).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    } else {
      this.pizzaService.add(this.formModel).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    };
  }

  delete() {
    this.pizzaService.delete(this.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }

  setIngredient(event) {
    if (event.target.id) {
      if (event.target.checked) {
        this.listCheckedIngredients.push(event.target.id);
        this.formPizza.patchValue({ ingredients: this.listCheckedIngredients });
      } else {
        this.listCheckedIngredients.splice(this.listCheckedIngredients.indexOf(event.target.id), 1);
        this.formPizza.patchValue({ ingredients: this.listCheckedIngredients });
      }
    }
  }
}
