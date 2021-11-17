import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { Supplier } from 'src/app/model/supplier';
import { ProductService } from 'src/app/service/product.service';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  product: Product | undefined;
  suppliers: Supplier[] = [];

  constructor(
    private productService: ProductService,
    private supplierService: SupplierService,
    private dialogRef: MatDialogRef<AddEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Product,
  ) { }

  ngOnInit(): void {
    this.supplierService.findAll().subscribe(data => {
      this.suppliers = data;
    });
    this.product = new Product();
    this.product.id = this.data.id;
    this.product.code = this.data.code;
    this.product.supplierId = this.data.supplierId;
    this.product.description = this.data.description;
    this.product.price = this.data.price;
    this.product.stock = this.data.stock;
  }

  ok() {
    if (this.product != null && this.product.id! > 0) {
      this.productService.update(this.product).pipe(switchMap(() => {
        return this.productService.findAll();
      })).subscribe(data => {
        this.productService.setSupplierChange(data);
        this.productService.setMessageChange('Se modificó');
      });
    } else {
      //registrar
      this.productService.save(this.product!).pipe(switchMap(() => {
        return this.productService.findAll();
      })).subscribe(data => {
        this.productService.setSupplierChange(data);
        this.productService.setMessageChange('Se registró');
      })
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
