import { ProductComponent } from './product.component';

export abstract class Electronics extends ProductComponent{
    warranty:number;

    abstract productAvailability(colour:string):void;
}
