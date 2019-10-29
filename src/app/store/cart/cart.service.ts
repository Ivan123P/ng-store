import { Injectable } from '@angular/core';
import { OrderLine } from 'src/app/model/orderLine.model';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public orderLineList: OrderLine[] = [];

  constructor( ) { }

  public addProduct(product: Product): void {
    const order = new OrderLine(
      1, product.name, product.price, product.price * 1
    );

    this.orderLineList.push(order);
  }
}
