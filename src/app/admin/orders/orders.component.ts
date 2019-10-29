import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService } from '../../model/products-repository.service';
import { OrderLine } from '../../model/orderLine.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: Array<{id: number, list: OrderLine}> = [];

  constructor(
    private productsRepository: ProductsRepositoryService
  ) { }

  ngOnInit() {
    this.productsRepository.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

}
