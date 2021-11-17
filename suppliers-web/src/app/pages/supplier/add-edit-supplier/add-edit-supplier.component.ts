import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-add-edit-supplier',
  templateUrl: './add-edit-supplier.component.html',
  styleUrls: ['./add-edit-supplier.component.css']
})
export class AddEditSupplierComponent implements OnInit {

  supplier: Supplier | undefined;
  
  constructor(
    private supplierService: SupplierService,
    private dialogRef: MatDialogRef<AddEditSupplierComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Supplier,
  ) { }

  ngOnInit(): void {
    this.supplier = new Supplier();
    this.supplier.id = this.data.id;
    this.supplier.description = this.data.description;
  }

  ok(){
    if (this.supplier != null && this.supplier.id! > 0) {
      this.supplierService.update(this.supplier).pipe(switchMap(() => {
        return this.supplierService.findAll();
      })).subscribe(data => {
        this.supplierService.setSupplierChange(data);
        this.supplierService.setMessageChange('Se modificó');
      });
    } else {
      //registrar
      this.supplierService.save(this.supplier!).pipe(switchMap(() => {
        return this.supplierService.findAll();
      })).subscribe(data => {
        this.supplierService.setSupplierChange(data);
        this.supplierService.setMessageChange('Se registró');
      })
    }
    this.close();
  }

  close(){
    this.dialogRef.close();
  }

}
