import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormData } from '../../shared/components/component.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  dataLogin = {
    title :'Login'
  }
  formEmail!: FormControl;
  formPassword!: FormControl;
  formDataInput!: FormData;
  formDataEmail!: FormData;
  @Output() closeModalLogin = new EventEmitter<boolean>();
  constructor() { 
    this.formEmail = new FormControl('', [Validators.required]);
    this.formPassword = new FormControl('', [Validators.required]);
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
    this.formDataInput = new FormData(dataInput)
    this.formDataEmail= new FormData(dataEmail)
  }
  
  closeModal(){
    this.closeModalLogin.emit(false)
  }
  login(){
    if(!this.formEmail.value) this.formEmail.markAsDirty()      
    if(!this.formPassword.value) this.formPassword.markAsDirty()      
    if(this.formEmail.value && this.formPassword.value) window.location.reload()
  }
}
