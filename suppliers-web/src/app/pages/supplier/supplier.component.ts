import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';
import { NotifService } from 'src/app/core/service/notif.service';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';
import { AddEditSupplierComponent } from './add-edit-supplier/add-edit-supplier.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  
})
export class SupplierComponent implements OnInit {

  displayedColumns = ['id', 'description', 'actions'];
  dataSource = new MatTableDataSource<Supplier>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private supplierService: SupplierService,
    private dialog: MatDialog,
    private notif: NotifService,) { }

  ngOnInit(): void {
    this.supplierService.getSupplierChange().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.supplierService.getMessageChange().subscribe(data => {
      this.notif.warning(data, 'AVISO', 2000);
    });

    this.supplierService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  addEdit(supplier?:Supplier){
    let med = supplier != null ? supplier : new Supplier();
    this.dialog.open(AddEditSupplierComponent, {
      width: '250px',
      data: med
    })
  }

  delete(supplier:Supplier){
    this.supplierService.delete(supplier.id!).pipe(switchMap(() => {
      return this.supplierService.findAll();
    })).subscribe(data => {
      this.supplierService.setSupplierChange(data);
      this.supplierService.setMessageChange('Se eliminó');
    });
  }

  filter(event?: any) {
    this.dataSource.filter = event!=null? event.target.value.trim().toLowerCase():'';
  }
}
