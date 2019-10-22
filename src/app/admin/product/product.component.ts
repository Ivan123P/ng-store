import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService } from '../../model/products-repository.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    public productsRepository: ProductsRepositoryService
  ) { }

  ngOnInit() {
  }

  public get products(): Product[] {
    return this.productsRepository.getAllProducts(null);
  }
  public deleteProduct(id: number): void {
    this.productsRepository.deleteProduct(id);
  }
}
