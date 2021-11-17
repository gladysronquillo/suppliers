import { Supplier } from "./supplier";

export class Product {

    id: number | undefined;
    supplier!: Supplier | undefined;
    supplierId: number | undefined;
    code: string | undefined;
    description: string | undefined;
    price: number | undefined;
    stock: number | undefined;

}