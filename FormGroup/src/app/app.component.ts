import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  RegistrationForm: FormGroup;
 

  constructor(){
    this.initializeForm();
    this.RegistrationForm = new FormGroup({
      firstnameControl : new FormControl('Saaandy'),
      lastnameControl : new FormControl('Parker'),
      address: new FormGroup({
        Houseno: new FormControl(),
        street: new FormControl(),
        statee: new FormControl(),
        ZipCode: new FormControl()
      })
  
    });
  }

 
  initializeForm(): void {
  
  }

  name = 'Angular ' + VERSION.major;

  submitForm(): void{
    console.log(this.RegistrationForm);
  }
}

