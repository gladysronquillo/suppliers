import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product>{

  private supplierChange = new Subject<Product[]>();
  private messageChange = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.apiUrl}/product`
    )
  }

  //métodos accesores  get, set //
  getSupplierChange() {
    return this.supplierChange.asObservable();
  }

  setSupplierChange(supplier: Product[]) {
    this.supplierChange.next(supplier);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }

  setMessageChange(message: string) {
    this.messageChange.next(message);
  }

  
}
