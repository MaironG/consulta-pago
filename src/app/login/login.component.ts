import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
   }

 
ngOnInit(){

  }

  private buildForm() {
    this.form = new FormGroup({
      usuario: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });

    //  this.form.valueChanges
    //  .subscribe(value => {
    //    console.log(value); 
    //  });
  }

  save(event: Event) {
  event.preventDefault();
  if (this.form.valid){
    const value = this.form.value;
    console.log(value);
  }
 
}}
