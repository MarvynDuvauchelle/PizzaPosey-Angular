import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';


@Component({
  selector: 'app-pizzaList',
  templateUrl: './pizzaList.component.html',
  styleUrls: ['./pizzaList.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  pizzas: any;
  pizza: any;
  currentPizza: any;
    
  ngOnInit() {
    this.pizzaService.get().subscribe(data => this.pizzas = data);
  }

  getOne(id) {
    this.pizza = this.pizzaService.getOne(id);
  }

  setCurrentPizza(pizza) {
    this.currentPizza = pizza;
  }
}
