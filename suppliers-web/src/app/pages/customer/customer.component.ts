import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';
import { NotifService } from 'src/app/core/service/notif.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  displayedColumns = ['id', 'names', 'surnames', 'documentNumber', 'actions'];
  dataSource = new MatTableDataSource<Customer>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private customerService: CustomerService,
    private dialog: MatDialog,
    private notif: NotifService,) { }

  ngOnInit(): void {
    this.customerService.getSupplierChange().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.customerService.getMessageChange().subscribe(data => {
      this.notif.warning(data, 'AVISO', 2000);
    });

    this.customerService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addEdit(customer?: Customer) {
    let med = customer != null ? customer : new Customer();
    this.dialog.open(AddEditCustomerComponent, {
      width: '250px',
      data: med
    })
  }

  delete(customer: Customer) {
    this.customerService.delete(customer.id!).pipe(switchMap(() => {
      return this.customerService.findAll();
    })).subscribe(data => {
      this.customerService.setSupplierChange(data);
      this.customerService.setMessageChange('Se eliminó');
    });
  }
  filter(event?: any) {
    this.dataSource.filter = event != null ? event.target.value.trim().toLowerCase() : '';
  }
}
