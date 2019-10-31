import { Component } from "@angular/core";
import { ProductsRepositoryService } from '../../model/products-repository.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  private currentCategory = null;

  constructor(
    public productRepository: ProductsRepositoryService,
    private loginService: LoginService,
    private router: Router
  ) {}

  public get categories(): string[] {
    return this.productRepository.getCategories();
  }

  public productsByCategory(category: string): void {
    this.currentCategory = category;
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['/store']);
  }
}
