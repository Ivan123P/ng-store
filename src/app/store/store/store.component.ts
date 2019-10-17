import { Component, OnInit } from '@angular/core';
import { DbService } from '../../model/db.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private dbService: DbService
  ) { }

  ngOnInit() {
    this.dbService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
