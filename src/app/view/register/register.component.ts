import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormData } from '../../shared/components/component.service'
import { emailValidator } from "../../shared/validator/email-validator.directive";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  dataRegister={
    title:'Register'
  }
  formName!: FormControl;
  formEmail!: FormControl;
  formPassword!: FormControl;
  formDataName!: FormData;
  formDataInput!: FormData;
  formDataEmail!: FormData;
  @Output() closeModalRegister = new EventEmitter<boolean>();
  constructor() { 
    this.formName = new FormControl('', [Validators.required]);
    this.formEmail = new FormControl('', [Validators.required, emailValidator()]);
    this.formPassword = new FormControl('', [Validators.required]);
    const dataName = {
      id: '',
      label: 'Name',
      placeholder: 'Name'
    }
    const dataInput = {
      id: '',
      label: 'Password',
      placeholder: 'Password'
    }
    const dataEmail = {
      id: '',
      label: 'Email',
      placeholder: 'Email'
    }
    this.formDataName = new FormData(dataName)
    this.formDataInput = new FormData(dataInput)
    this.formDataEmail= new FormData(dataEmail)
  }

  closeModal(){
    this.closeModalRegister.emit(false)
  }
  register(){
    console.log(this.formEmail , 'fc');
    if(!this.formName.value) this.formName.markAsDirty()      
    if(!this.formEmail.value) this.formEmail.markAsDirty()      
    if(!this.formPassword.value) this.formPassword.markAsDirty()      
    if(this.formEmail.value && this.formPassword.value&& this.formName.value) window.location.reload()
  }
}
