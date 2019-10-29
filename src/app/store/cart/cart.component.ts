import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { OrderLine } from '../../model/orderLine.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
  }

  public removeLine(line: OrderLine) {
    console.log(line);
  }

}
