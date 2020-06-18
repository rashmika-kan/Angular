export interface ProductInterface {
 productName:string;
  productId:number;
  cost:number;
  quantity:number;

  calculatePrice():number;
}
