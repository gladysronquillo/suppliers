import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Order } from '../model/order';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends GenericService<Order>{

  private supplierChange = new Subject<Order[]>();
  private messageChange = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.apiUrl}/order`
    )
  }

  //métodos accesores  get, set //
  getSupplierChange() {
    return this.supplierChange.asObservable();
  }

  setSupplierChange(order: Order[]) {
    this.supplierChange.next(order);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }

  setMessageChange(message: string) {
    this.messageChange.next(message);
  }

  
}
