import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderDetail } from 'src/app/model/order-detail';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-edit-order-detail',
  templateUrl: './add-edit-order-detail.component.html',
  styleUrls: ['./add-edit-order-detail.component.css']
})
export class AddEditOrderDetailComponent implements OnInit {

  orderDetail: OrderDetail | undefined;
  products: Product[] = [];

  constructor(private productService: ProductService,
    private dialogRef: MatDialogRef<AddEditOrderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private data: OrderDetail,) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
    this.orderDetail = new OrderDetail();
    this.orderDetail.id = this.data.id;
    this.orderDetail.product = this.data.product;
    this.orderDetail.productId = this.data.productId;
    this.orderDetail.quantity = this.data.quantity;
  }
  change(event:number){
    this.orderDetail!.productId = event;
  }
  
  ok(){
    this.dialogRef.close(this.orderDetail);
  }

  close() {
    this.dialogRef.close();
  }

}
