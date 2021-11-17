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
      subscribe: new FormControl(true),
      address: new FormGroup({
        Houseno: new FormControl(),
        street: new FormControl(),
        statee: new FormControl(),
        ZipCode: new FormControl()
      }),
      contactinfo: new FormGroup({
        email: new FormControl('sandeep@gmail.com'),
        phonenumber: new FormControl('100-100')
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

