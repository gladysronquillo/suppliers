import { Customer } from "./customer";
import { OrderDetail } from "./order-detail";

export class Order {

    id: number | undefined;
    customer!: Customer | undefined;
    customerId: number | undefined;
    orderDate: Date | undefined;
    address: string | undefined;
    orderDetails: OrderDetail[] | undefined = [];
}