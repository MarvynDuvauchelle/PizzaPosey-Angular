import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'Rxjs';

@Component({
  selector: 'app-ingredientForm',
  templateUrl: './ingredientForm.component.html',
})
export class IngredientFormComponent implements OnInit {

  private formIngredient: FormGroup;
  private id: number;
  private formModel: any;
  private ingredients: any;

  constructor(private route: ActivatedRoute, private router: Router, private ingredientService: IngredientService) { }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.formIngredient = new FormGroup({
      _id: new FormControl(""),
      name: new FormControl("", Validators.required),
      weight: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required)
    });
    if (this.id) {
      this.ingredientService.getOne(this.id).subscribe(data => {
        this.formIngredient.patchValue(data);
      });
    }
  }

  onSubmit() {
    this.formModel = this.formIngredient.value;
    if (this.id) {
      this.ingredientService.edit(this.formModel).subscribe(data => {
        console.log(data);
        this.router.navigate(['/ingredient']);
      });
    } else {
      this.ingredientService.add(this.formModel).subscribe(data => {
        console.log(data);
        this.router.navigate(['/ingredient']);
      });
    };
  }
}
