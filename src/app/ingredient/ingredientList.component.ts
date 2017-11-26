import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredientList',
  templateUrl: './ingredientList.component.html',
  styleUrls: ['./ingredientList.component.css']
})
export class IngredientListComponent implements OnInit {

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ingredients: any;
  ingredient: any;
  currentIngredient: any;
    
  ngOnInit() {
    this.ingredientService.get().subscribe(data => this.ingredients = data);
  }

  getOne(id) {
    this.ingredient = this.ingredientService.getOne(id);
  }
  
  delete(id) {
    this.ingredientService.delete(id).subscribe(data => {
    });
  }
}
