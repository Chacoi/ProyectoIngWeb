import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { UserService } from '../user.service'
@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  myForm: FormGroup;
  constructor(public fb: FormBuilder/* , private user: UserService */) {
    this.myForm = this.fb.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
     /*  pass1: ['', [Validators.required]], */
      email: ['', [Validators.required], [Validators.email]]
    });
   }

  ngOnInit(): void {
  }
  
 /*  onSubmit(){
    this.user.insertUser(this.myForm.value);
  } */
}
