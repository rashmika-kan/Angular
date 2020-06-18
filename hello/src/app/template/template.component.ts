import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  courseName:string="Angular";
  name:string;
  year:number;

   changeName(p) {
    this.courseName="Typscript"
  }
  //showName(value){
   //this.name=value;
  //}
  showYear(value){
  this.year=2020-value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
