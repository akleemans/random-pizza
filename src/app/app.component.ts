import {Component} from '@angular/core';
import {ALL_PIZZAS} from "./pizzas";

interface Pizza {
  name: string;
  ingredients: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pizza?: Pizza;
  public ingredients: string[] = [];
  public allPizzas: Pizza[] = ALL_PIZZAS;
  public animate = false;

  public choosePizza(): void {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
      const randomIdx = Math.floor(Math.random() * this.allPizzas.length);
      this.pizza = this.allPizzas[randomIdx];
      this.ingredients = this.pizza.ingredients.split(', ')
    }, 3000);
  }
}
