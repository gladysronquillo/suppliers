import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductComponent } from './pages/product/product.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

const routes: Routes = [
  {
    path: 'suppliers', component: SupplierComponent
  },
  {
    path: 'customers', component: CustomerComponent
  },
  {
    path: 'products', component: ProductComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
