import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ModelModule } from '../model/model.module';



@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    ModelModule,
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})
export class StoreModule { }
