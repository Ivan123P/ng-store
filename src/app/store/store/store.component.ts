import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsRepositoryService } from '../../model/products-repository.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  private currentCategory = null;

  constructor(
    public productsRepository: ProductsRepositoryService
  ) { }

  ngOnInit() {
  }

  public addToCart(product: Product): void {
    console.log(product);
  }

  public productsByCategory(category: string): void {
    this.currentCategory = category;
  }

  public get products(): Product[] {
    return this.productsRepository.getAllProducts(this.currentCategory);
  }

  public get categories(): string[] {
    return this.productsRepository.getCategories();
  }
}
