import { Component } from "@angular/core";
import { ProductsRepositoryService } from '../../model/products-repository.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  private currentCategory = null;

  constructor(
    public productRepository: ProductsRepositoryService
  ) {}

  public get categories(): string[] {
    return this.productRepository.getCategories();
  }

  public productsByCategory(category: string): void {
    this.currentCategory = category;
  }
}
