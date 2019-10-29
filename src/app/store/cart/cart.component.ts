import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { OrderLine } from '../../model/orderLine.model';
import { ProductsRepositoryService } from '../../model/products-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
    private producsRepository: ProductsRepositoryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public removeLine(line: OrderLine) {
    this.cartService.removeLine(line);
  }

  public plus(line: OrderLine) {
    this.cartService.plus(line);
  }

  public minus(line: OrderLine) {
    this.cartService.minus(line);
  }

  public addOrder(orderList: OrderLine[]): void {
    this.producsRepository.addOrder(orderList);
    this.cartService.clearCart();
    this.router.navigate(['/store']);
  }
}
