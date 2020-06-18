import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insuring-party',
  templateUrl: './insuring-party.component.html',
  styleUrls: ['./insuring-party.component.css']
})
export class InsuringPartyComponent implements OnInit {
  insureForm: FormGroup;
  places=['Mumbai','Delhi','Chennai','Kolkata'];  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.insureForm=this.formBuilder.group({
      data:     ['', Validators.required],
      residence: [ '',Validators.required],
      emailid:    [ '',Validators.required]
    });
  }
  onSubmit( ) {
    console.log(this.insureForm.value);
  }

}
