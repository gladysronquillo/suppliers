import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs';
import { Supplier } from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends GenericService<Supplier>{

  private supplierChange = new Subject<Supplier[]>();
  private messageChange = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.apiUrl}/supplier`
    )
  }

  //métodos accesores  get, set //
  getSupplierChange() {
    return this.supplierChange.asObservable();
  }

  setSupplierChange(supplier: Supplier[]) {
    this.supplierChange.next(supplier);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }

  setMessageChange(message: string) {
    this.messageChange.next(message);
  }

  
}
