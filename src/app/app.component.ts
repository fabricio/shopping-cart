import { Component } from '@angular/core';
import { products } from './service/products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenger - week 1 - shopping-cart';

  products = products;

}
