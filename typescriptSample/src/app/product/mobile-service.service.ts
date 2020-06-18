import { Injectable } from '@angular/core';
import {MobileColour} from 'src/app/product/mobile-colour.enum'

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {
   availableMobile:any=[{colour:'Black',stock:false}];

  constructor() { 
    this.availableMobile.push({colour:'Grey',stock:true},{colour:'Blue',stock:true});
  }

  getAvailableMobiles():[string,boolean]{
    return this.availableMobile;
  }

}
