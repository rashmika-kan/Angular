import { Person } from './person';
import { Discount } from './discount';

export class Purchase {



    getName(person:Person):String{
        return person.name;
        
    }


    getDiscount(person:Person) :Discount|null{
        if(person.age!==undefined && person.age>70){
            return {code:"TEN",percent:0.90};
        }
        if(!((person.orders||[]).some(order=>order.discount && order.discount.percent>0)))
        {
            return {code:"FIVE",percent:0.95};
        }
        if((person.orders||[]).some(order=>order.productId==10))
        {
            return {code:"TWO",percent:0.98};
        }
        if(person.address && person.address.country && person.address.country=="India")
        {
            return {code:"ONE",percent:0.99};
        }
    
    }

    getTotalBill(person:Person):number{
        if(person.orders){
            let cost:number=0;
            let orders=person.orders;
            for(let order of orders){
                console.log( "order price"+order.unitPrice)
                console.log("order quantity"+order.quantity)
                if(order.discount){
                    console.log( "item discount"+order.discount.code)
                   let itemDiscount:number=order.discount.percent;
                   cost+=(order.unitPrice*order.quantity*itemDiscount);
                   console.log("total cost before total discount with item discount"+ cost)
                                  }
                else{
                    cost+=(order.unitPrice*order.quantity);
                    console.log("total cost  before total discount"+ cost)
                    }
            }
        if(this.getDiscount(person)){
        let discount=this.getDiscount(person).percent;
        console.log("bill discount"+ discount)
        cost*=discount;
                                    }
                                    
        return cost;
        }
        
    }

}
