import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  RegistrationForm: FormGroup;
 

  constructor(private fb: FormBuilder){
    this.initializeForm();
    this.RegistrationForm = this.fb.group({
      firstnameControl : 'Advaith',
      lastnameControl : 'Parker',
      subscribe: true,
      address: this.fb.group({
        Houseno: '',
        street: '',
        statee: '',
        ZipCode: ''
      }),
      contactinfo:this.fb.group({
        email: 'sandeep@gmail.commm',
        phonenumber: '100-100'
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

