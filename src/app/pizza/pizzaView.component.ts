import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-child',
  templateUrl: './pizzaView.component.html',
})
export class PizzaViewComponent implements OnInit {

  pizza: any;

  constructor(private route: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.pizza = this.pizzaService.getOne(id);
  }

}
