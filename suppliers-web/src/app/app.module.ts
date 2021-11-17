import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductComponent } from './pages/product/product.component';
import { AddEditCustomerComponent } from './pages/customer/add-edit-customer/add-edit-customer.component';
import { AddEditSupplierComponent } from './pages/supplier/add-edit-supplier/add-edit-supplier.component';
import { AddEditProductComponent } from './pages/product/add-edit-product/add-edit-product.component';
import { ServerErrorsInterceptor } from './core/interceptor/server-errors.interceptor';
import { APP_BASE_HREF } from '@angular/common';
import { NotifService } from './core/service/notif.service';
import { ToastrModule } from 'ngx-toastr';
import { OrdersComponent } from './pages/orders/orders.component';
import { AddEditOrderComponent } from './pages/orders/add-edit-order/add-edit-order.component';
import { AddEditOrderDetailComponent } from './pages/orders/add-edit-order-detail/add-edit-order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupplierComponent,
    CustomerComponent,
    ProductComponent,
    AddEditCustomerComponent,
    AddEditSupplierComponent,
    AddEditProductComponent,
    OrdersComponent,
    AddEditOrderComponent,
    AddEditOrderDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    NotifService,
    { provide: APP_BASE_HREF, useValue: '/' },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorsInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
