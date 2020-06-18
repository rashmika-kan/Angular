import { Discount } from './discount';

export class Order {
    productId:number;
    unitPrice:number;
    quantity:number;
    discount?:Discount;

}
