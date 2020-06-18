import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
   myVar:string='Hello World';

  constructor() {
    console.log(this.myVar);
   }

  ngOnInit(): void {
  }

}
