import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {
  private products: Product[] = [];

  constructor(
    private dbService: DbService
  ) {
    this.setProducts();
  }

  public getAllProducts(category: string | null): Product[] {
    return this.products.filter((product) => {
      return category === null || product.category === category;
    });
  }

  public getProductById(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  public getCategories(): string[] {
    return this.products
            .map(product => product.category)
            .filter((category, index, array) => array.indexOf(category) === index)
            .sort();
  }

  public deleteProduct(id: number) {
    this.dbService.deleteProduct(id).subscribe(() => {
      this.setProducts();
    });
  }

  public setProducts(): void {
    this.dbService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
