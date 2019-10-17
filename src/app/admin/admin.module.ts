import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, ProductComponent, OrdersComponent, ProductFormComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
