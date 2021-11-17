import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';
import { NotifService } from 'src/app/core/service/notif.service';
import { Customer } from 'src/app/model/customer';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns = ['id', 'supplier', 'code', 'description','price','stock','actions'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private productService: ProductService,
    private dialog: MatDialog,
    private notif: NotifService,) { }

  ngOnInit(): void {
    this.productService.getSupplierChange().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.productService.getMessageChange().subscribe(data => {
      this.notif.warning(data, 'AVISO', 2000);
    });

    this.productService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addEdit(product?:Product){
    let med = product != null ? product : new Product();
    this.dialog.open(AddEditProductComponent, {
      width: '250px',
      data: med
    })
  }

  delete(product:Product){
    this.productService.delete(product.id!).pipe(switchMap(() => {
      return this.productService.findAll();
    })).subscribe(data => {
      this.productService.setSupplierChange(data);
      this.productService.setMessageChange('Se eliminó');
    });
  }

  filter(event?: any) {
    this.dataSource.filter = event!=null? event.target.value.trim().toLowerCase():'';
  }

}
