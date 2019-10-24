import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

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
}
