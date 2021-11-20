import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  RegistrationForm: FormGroup;
  get phoneNumbers(): FormArray{
    return this.RegistrationForm.get('phoneNumbers') as FormArray;
  }
  get subjects(): FormArray{
    return this.RegistrationForm.get('subjects') as FormArray;
  }


  constructor(private fb: FormBuilder){
    this.initializeForm();
    this.RegistrationForm = this.fb.group({
      firstnameControl : 'Advaith',
      lastnameControl : 'Parker',
      subscribe: true,
      phoneNumbers: this.fb.array([this.intiPhone()]),
      subjects: this.fb.array([this.intisubjects()]),
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

  addsubjects(): void{
    this.subjects.push(this.intisubjects());
    console.log(this.subjects)
  }
  addPhoneNumber(): void{
    this.phoneNumbers.push(this.intiPhone());
    console.log(this.phoneNumbers)
  }
  removePhonenumber(index: number) : void{
    this.phoneNumbers.removeAt(index);
    console.log(this.phoneNumbers);

  }

  intisubjects()
  {
    return this.fb.control('');
  }
  intiPhone()
  {
    return this.fb.control('');
  }

 
  initializeForm(): void {
  
  }

  name = 'Angular ' + VERSION.major;

  submitForm(): void{
    console.log(this.RegistrationForm);
  }
}

