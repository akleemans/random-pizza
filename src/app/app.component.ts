import {Component, OnInit} from '@angular/core';
import {ALL_PIZZAS} from "./pizzas";
import {HttpClient} from "@angular/common/http";

interface Pizza {
  name: string;
  ingredients: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pizza?: Pizza;
  public ingredients: string[] = [];
  public allPizzas: Pizza[] = ALL_PIZZAS;
  public animate = false;
  private spinningTimeMs = 2500;

  public constructor(private readonly http: HttpClient) {
  }

  public choosePizza(): void {
    if (this.animate) {
      return;
    }
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
      const randomIdx = Math.floor(Math.random() * this.allPizzas.length);
      this.pizza = this.allPizzas[randomIdx];
      this.ingredients = this.pizza.ingredients.split(', ')
    }, this.spinningTimeMs);
  }

  public ngOnInit(): void {
    this.http.get('https://akleemans.pythonanywhere.com/api/visitors?project=random-pizza').subscribe();
  }
}
