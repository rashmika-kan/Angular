import { Component} from '@angular/core';
import { ProductComponent } from '../product.component';
import { MobileServiceService } from '../mobile-service.service';
import { MobileColour } from '../mobile-colour.enum';
import { Electronics } from '../electronics';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent extends Electronics{

    colour:string;
    isAvailable:string;
    present:boolean=false;
    constructor( private mobileService:MobileServiceService){
        super();}

    productAvailability(colour:string): void {
        
        let availableMobiles:any=this.mobileService.getAvailableMobiles();
        for (const item of availableMobiles){
            if(item.colour==colour){
                this.productName=colour;
                if(item.stock==true){
                    this.isAvailable='available for purchase';
                    this.present=true;

                                    }
                else{
                    this.isAvailable='out of stock';
                    this.present=false;
                    }
                                    }
                                             }
                                                }
      getMobilePrice(colour:string){
       
        if(colour=='Black'){
          this.cost=MobileColour.Black;
          this.colour='Black';
        }
        else if(colour=='Grey'){
          this.cost=MobileColour.Grey;
          this.colour='Grey';
                               }
        else{
          this.cost=MobileColour.Blue;
          this.colour='Blue';
        }
        
        
      }
}
