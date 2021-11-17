import { Product } from "./product";

export class OrderDetail {

    id: number | undefined;
    product!: Product | undefined;
    productId: number | undefined;
    quantity: number | undefined;

}