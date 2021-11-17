import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends GenericService<Customer>{

  private supplierChange = new Subject<Customer[]>();
  private messageChange = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.apiUrl}/customer`
    )
  }

  //métodos accesores  get, set //
  getSupplierChange() {
    return this.supplierChange.asObservable();
  }

  setSupplierChange(supplier: Customer[]) {
    this.supplierChange.next(supplier);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }

  setMessageChange(message: string) {
    this.messageChange.next(message);
  }

  
}
