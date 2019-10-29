import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { OrderLine } from './orderLine.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {
  private products: Product[] = [];

  constructor(
    private dbService: DbService
  ) {
    this.getList();
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
      this.getList();
    });
  }

  private getList(): void {
    this.dbService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  public createProduct(body: Product): void {
    this.dbService.addProduct(body).subscribe(() => {
      this.getList();
    });
  }

  public addOrder(order: OrderLine[]): any {
    this.dbService.addOrder(order).subscribe(() => {});
  }

  public getOrders(): Observable<Array<{id: number, list: OrderLine}>> {
    return this.dbService.getOrders();
  }
}
