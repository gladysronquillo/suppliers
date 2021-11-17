import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';
import { NotifService } from 'src/app/core/service/notif.service';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { AddEditOrderComponent } from './add-edit-order/add-edit-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns = ['id', 'customer', 'orderDate', 'address','actions'];
  dataSource = new MatTableDataSource<Order>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private orderService: OrderService,
    private dialog: MatDialog,
    private notif: NotifService,) { }

  ngOnInit(): void {
    this.orderService.getSupplierChange().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.orderService.getMessageChange().subscribe(data => {
      this.notif.warning(data, 'AVISO', 2000);
    });

    this.orderService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addEdit(order?:Order){
    let med = order != null ? order : new Order();
    this.dialog.open(AddEditOrderComponent, {
      width: '850px',
      data: med
    })
  }

  delete(customer:Customer){
    this.orderService.delete(customer.id!).pipe(switchMap(() => {
      return this.orderService.findAll();
    })).subscribe(data => {
      this.orderService.setSupplierChange(data);
      this.orderService.setMessageChange('Se eliminó');
    });
  }

  filter(event?: any) {
    this.dataSource.filter = event!=null? event.target.value.trim().toLowerCase():'';
  }

}
