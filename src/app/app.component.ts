import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms'
import { FormGroup, Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { passwordMatchValidator } from './validators'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      fullname: ["",Validators.required],
      username: ["",Validators.required],
      email: ["",[Validators.required,Validators.email]],
      password: ["",Validators.required],
      confirm_password: ["",Validators.required],
      termsAccepted: [false, Validators.required]
    },{
      validator: passwordMatchValidator('password', 'confirm_password') // İkinci ve birinci şifreleri karşılaştıran doğrulama işlemi
    });
  }
  onSubmit() {
    if (this.frm.valid) {
      console.log("Form data submitted:", this.frm.value);
    } else {
      console.log("Form data is invalid. Please check the fields.");
    }
  }
 /* onSubmit() {
   console.log(this.frm.value);
  }*/

  isChecked: boolean = false;

  //@ViewChild("frm", { static: true }) frm: NgForm;

  /*createuser(data) {
    console.log(`Value : ${this.frm.value}`);
    console.log(`Valid : ${this.frm.valid}`);
    console.log(`Touched : ${this.frm.touched}`);

    console.log(data);
  }*/
}