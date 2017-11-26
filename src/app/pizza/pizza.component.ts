import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private pizzaService: PizzaService, private router: Router, private route: ActivatedRoute) { }

  pizzas: any;
  pizza: any;
  currentPizza: any;
  private id: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.pizza = new Pizza("","","","", []);
    this.pizzaService.getOne(this.id).subscribe(data => this.pizza = data);
  }

}
