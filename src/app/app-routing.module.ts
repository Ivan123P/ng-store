import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';
import { OrdersComponent } from './admin/orders/orders.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'store'},
  {path: 'store', component: StoreComponent},
  // {path: 'admin/login', component: LoginComponent}
  {path: 'admin/products', component: ProductComponent},
  {path: 'admin/orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
