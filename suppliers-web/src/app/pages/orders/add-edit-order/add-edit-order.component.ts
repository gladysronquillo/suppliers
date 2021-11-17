import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { AddEditProductComponent } from '../../product/add-edit-product/add-edit-product.component';
import { AddEditOrderDetailComponent } from '../add-edit-order-detail/add-edit-order-detail.component';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {


  order: Order | undefined;
  customers: Customer[] = [];

  displayedColumns = ['product', 'quantity', 'actions'];
  dataSource = new MatTableDataSource<OrderDetail>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddEditOrderComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Order,
  ) { }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(data => {
      this.customers = data;
    });
    this.order = new Order();
    this.order.id = this.data.id;
    this.order.customerId = this.data.customerId;
    this.order.address = this.data.address;
    this.order.orderDate = this.data.orderDate;
    this.order.orderDetails = this.data.orderDetails;
    this.dataSource = new MatTableDataSource(this.order.orderDetails);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ok() {
    if (this.order != null && this.order.id! > 0) {
      this.orderService.update(this.order).pipe(switchMap(() => {
        return this.orderService.findAll();
      })).subscribe(data => {
        this.orderService.setSupplierChange(data);
        this.orderService.setMessageChange('Se modificó');
      });
    } else {
      //registrar
      this.orderService.save(this.order!).pipe(switchMap(() => {
        return this.orderService.findAll();
      })).subscribe(data => {
        this.orderService.setSupplierChange(data);
        this.orderService.setMessageChange('Se registró');
      })
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  addEdit(index?:number,order?: OrderDetail) {
    let med = order != null ? order : new OrderDetail();
    const dialogRef =  this.dialog.open(AddEditOrderDetailComponent, {
      width: '250px',
      data: med
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(index);
      
      
      if(result != null){
        if(index == null){
          this.order!.orderDetails!.push(result);
        }else{
          this.order!.orderDetails![index] = result;  
        }		  
    this.dataSource = new MatTableDataSource(this.order!.orderDetails);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
        
      }
    });
  }

  delete(order: OrderDetail) {
    const index = this.order!.orderDetails!.indexOf(order);
		this.order!.orderDetails!.splice(index, 1);    
    this.dataSource = new MatTableDataSource(this.order!.orderDetails);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


}
