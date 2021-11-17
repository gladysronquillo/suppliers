import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  customer: Customer | undefined;

  constructor(
    private customerService: CustomerService,
    private dialogRef: MatDialogRef<AddEditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Customer,
  ) { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.customer.id = this.data.id;
    this.customer.names = this.data.names;
    this.customer.surnames = this.data.surnames;
    this.customer.documentNumber = this.data.documentNumber;
  }

  ok(){
    if (this.customer != null && this.customer.id! > 0) {
      this.customerService.update(this.customer).pipe(switchMap(() => {
        return this.customerService.findAll();
      })).subscribe(data => {
        this.customerService.setSupplierChange(data);
        this.customerService.setMessageChange('Se modificó');
      });
    } else {
      //registrar
      this.customerService.save(this.customer!).pipe(switchMap(() => {
        return this.customerService.findAll();
      })).subscribe(data => {
        this.customerService.setSupplierChange(data);
        this.customerService.setMessageChange('Se registró');
      })
    }
    this.close();
  }

  close(){
    this.dialogRef.close();
  }

}
