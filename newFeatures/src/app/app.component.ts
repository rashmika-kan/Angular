import { Component } from '@angular/core';
import { Order } from ".//order";
import { Person } from './person';
import { Discount } from './discount';
import { Purchase} from  './purchase';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bill:number;
  purchase:Purchase= new Purchase();;
  order1:Order={productId:3,unitPrice:400,quantity:2};
  order2:Order={productId:10,unitPrice:800,quantity:1};
  order3:Order={productId:7,unitPrice:300,quantity:4,discount:{code:"THREE",percent:0.97}};
  order4:Order={productId:5,unitPrice:600,quantity:2};
  order5:Order={productId:1,unitPrice:200,quantity:5};
  customer1:Person={name:"Sam",age:30,address:{country:"India"},orders:[this.order1,this.order2]};
  customer2:Person={name:"Tim",address:{country:"UK"},orders:[this.order3,this.order4]};
  customer3:Person={name:"Tom",age:70,orders:[this.order5]};

  constructor(){
    
     //console.log("Customer1: "+this.purchase.getTotalBill(this.customer1));
     //console.log("Customer2: "+this.purchase.getTotalBill(this.customer2));
     console.log("Customer3: "+this.purchase.getTotalBill(this.customer3));
    //this.bill=this.purchase.getTotalBill(this.customer1);
  }
  



}
