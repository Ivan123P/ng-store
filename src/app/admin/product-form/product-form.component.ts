import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsRepositoryService } from '../../model/products-repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  public createProductForm: FormGroup | null = null;

  public name: FormControl | null = null;
  public category: FormControl | null = null;
  public description: FormControl | null = null;
  public price: FormControl | null = null;

  public formErrors = {
    name: '',
    price: ''
  };

  public validationMessages = {
    name: {
      required: 'This field is required!',
      pattern: 'Incorrect name!'
    },
    price: {
      required: 'This field is required!',
      min: 'You must enter number bigger 0!',
      minLength: 'You must input more then 1 symbols!'
    }
  };

  private subs: Subscription;

  constructor(
    private productRepository: ProductsRepositoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const mode = this.activatedRoute.snapshot.params['mode'];
    let product = new Product('', '', '', 0);

    if (mode === 'edit') {
      const id = +this.activatedRoute.snapshot.params['id'];
      product = this.productRepository.getProductById(id);
    }

    this.name = new FormControl(product.name, [Validators.required, Validators.pattern(/[a-z0-9]/)]);
    this.category = new FormControl(product.category, Validators.required);
    this.description = new FormControl(product.description);
    this.price = new FormControl(product.price, [Validators.required, Validators.min(1), Validators.minLength(3)]);

    this.createProductForm = new FormGroup({
      name: this.name,
      category: this.category,
      description: this.description,
      price: this.price
    });
    this.subs = this.createProductForm.valueChanges.subscribe(data => this.onValueChange(data));
    this.onValueChange();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private onValueChange(data?: any): void {
    if (!this.createProductForm) {
      return;
    }

    const form = this.createProductForm;

    for(let field in this.formErrors) {
      this.formErrors[field] = '';

      const control = form.get(field);

      if (control && control.touched && control.invalid) {
        const message = this.validationMessages[field];

        for(let key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  public save(): void {
    if (this.createProductForm.valid) {
      this.productRepository.createProduct(this.createProductForm.value);
      this.router.navigate(['/admin/home/products']);
    }
  }

}
