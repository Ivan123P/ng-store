import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { OrderLine } from './orderLine.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public deleteProduct(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/products/' + id);
  }

  public addProduct(body: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', body);
  }

  public editProduct(body: Product, id: number): Observable<Product> {
    return this.http.put<Product>('http://localhost:3000/products/' + id, body);
  }

  public addOrder(order: OrderLine[]): Observable<any> {
    const body = {
      list: order
    };

    return this.http.post<any>('http://localhost:3000/orders', body);
  }

  public getOrders(): Observable<Array<{id: number, list: OrderLine}>> {
    return this.http.get<Array<{id: number, list: OrderLine}>>('http://localhost:3000/orders');
  }
}
