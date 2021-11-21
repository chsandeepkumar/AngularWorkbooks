import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  applicationForm!: FormGroup;
  get nameControl(): FormControl
  {
    return this.applicationForm.get('nameControl') as FormControl;
  }
  get email1(): FormControl
  {
    return this.applicationForm.get('email1') as FormControl;
  }
  get phone1(): FormControl
  {
    return this.applicationForm.get('phone1') as FormControl;
  }

  constructor(private fb: FormBuilder)
  {

  }
  ngOnInit()
  {
    this.initializeForm();
  }
  
  initializeForm(): void{

    this.applicationForm= this.fb.group({

      nameControl: ['', [Validators.required, Validators.minLength(2)]],
      email1:['', [Validators.required, Validators.email]],
      phone1:['', [Validators.required, phoneValidator]],
      contactInfo: this.fb.group({
        email:'sandee@gmail.com',
        phone:'999'
      }),
      hobby:'',
      over18:''
      

    });

  }
  apply(): void {

    console.log(this.applicationForm);
  }
  
}
function phoneValidator(control: AbstractControl): {[key:string]: any} | null{
  const phonRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  if(phonRegex.test(control.value)){
    return null;
  }
  else
  return{
    invalidPhone: true
  };
}