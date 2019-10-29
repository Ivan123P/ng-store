import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { MainComponent } from './admin/main/main.component';
import { CartComponent } from './store/cart/cart.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'store'},
  {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent},
  // {path: 'admin/login', component: LoginComponent}
  {path: 'admin/home', component: MainComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'products'},
    {path: 'products', component: ProductComponent},
    {path: 'products/:mode', component: ProductFormComponent},
    {path: 'products/:mode/:id', component: ProductFormComponent},
    {path: 'orders', component: OrdersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
