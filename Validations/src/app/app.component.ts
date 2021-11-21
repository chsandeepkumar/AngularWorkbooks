import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

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
      contactInfo: this.fb.group({
        email:'sandee@gmail.com',
        phone: '999'
      }),
      hobby:'',
      over18:''
      

    });

  }
  apply(): void {

    console.log(this.applicationForm);
  }
  
}