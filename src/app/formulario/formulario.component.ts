import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  items;
  checkoutForm: FormGroup;
  constructor(

    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit(): void {
   
  }

  onSubmit(customerData){
    // Process checkout data here
  
    this.checkoutForm.reset();
    console.warn('your order has been submitted', customerData);
  }

}
