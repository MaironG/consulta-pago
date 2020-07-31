import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { DataApi } from '../interface/data-api';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  form: FormGroup;
  noticias: DataApi[]=[];

  constructor(private fb: FormBuilder, private servicio: ApiLoginService) {
    this.buildForm();
   }
   
  ngOnInit(){

    this.servicio.getUser(3,"mmarinez").subscribe(resp =>{
      console.log('noticias', resp);
  });
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
}

}
