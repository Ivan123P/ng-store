import { Injectable } from '@angular/core';
import { OrderLine } from 'src/app/model/orderLine.model';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public orderLineList: OrderLine[] = [];
  public subtotal: number = 0;

  constructor( ) { }

  public addProduct(product: Product): void {
    let orderLineExist = this.orderLineList.find((item) => item.product === product.name);

    if (orderLineExist) {
      orderLineExist.quantity = orderLineExist.quantity + 1;
      orderLineExist.subtotal += product.price;

      const index = this.orderLineList.findIndex((item) => item.product === product.name);

      this.orderLineList[index] = orderLineExist;
    } else {
      const order = new OrderLine(
        1, product.name, product.price, product.price * 1
      );

      this.orderLineList.push(order);
    }

    this.calcSubtotal();
  }

  public removeLine(line: OrderLine): void {
    const index = this.orderLineList.findIndex((item) => item.product === line.product);
    this.orderLineList.splice(index, 1);

    this.calcSubtotal();
  }

  public plus(line: OrderLine): void {
    line.quantity = line.quantity + 1;
    line.subtotal += line.price;

    this.calcSubtotal();
  }

  public minus(line: OrderLine): void {
    if (line.quantity > 1) {
      line.quantity = line.quantity - 1;
      line.subtotal -= line.price;

      this.calcSubtotal();
    }
  }

  public clearCart() {
    this.orderLineList = [];
    this.subtotal = 0;
  }

  private calcSubtotal() {
    this.subtotal = 0;
    this.orderLineList.forEach((item) => {
      this.subtotal += item.subtotal;
    });
  }
}
