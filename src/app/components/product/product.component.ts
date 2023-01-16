import { products } from './../../service/products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = products;


  // get totalItems(): number {
  //   let total = 0;
  //   this.items.forEach((item) => {
  //     total += item.amount;
  //   });

  //   return total;
  // }

  // get totalPrice(): number {
  //   let value = 0;
  //   this.items.forEach((item) => {
  //     value += item.amount * item.product.price;
  //   });

  //   return value;
  // }

  // ChangeAmount(data: IChangeAmount) {
  //   const index = this.items.findIndex((item) => item.id === data.id);

  //   if (index !== -1) {
  //     this.items[index].amount = data.amount;
  //     if (data.amount > 0) {
  //       this.items[index].totalPrice =
  //         data.amount * this.items[index].product.price;
  //     } else {
  //       this.items[index].totalPrice = this.items[index].product.price;
  //     }
  //   }
  // }
}
