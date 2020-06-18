import { Component, OnInit } from '@angular/core';
import { ProductInterface } from './product-interface';
import { CategoryInterface } from './category-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements CategoryInterface {
  productName:string;
  productId:number;
  cost:number;
  quantity:number;
  categoryName:string;
  show:boolean=false;

  constructor() { }

  calculatePrice():number{
  let price:number=this.quantity*this.cost;
  return price;
  }
 

  

}
