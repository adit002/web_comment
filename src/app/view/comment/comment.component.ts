import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validator/email-validator.directive';
import { FormData } from '../../shared/components/component.service'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  dataComments={
    submit:'Submit',
    reset:'Reset'
  }
  formName!: FormControl;
  formEmail!: FormControl;
  formKomentar!: FormControl;
  formDataInput!: FormData;
  formDataTextArea!: FormData;
  formDataEmail!: FormData;
  constructor() {
    this.formName = new FormControl('', [Validators.required]);
    this.formEmail = new FormControl('', [Validators.required, emailValidator()]);
    this.formKomentar = new FormControl('', [Validators.required]);
    const dataInput = {
      id: '',
      label: '',
      placeholder: 'Nama'
    }
    const dataEmail = {
      id: '',
      label: '',
      placeholder: 'Email'
    }
    const dataTextArea = {
      id: '',
      label: '',
      placeholder: 'Komentar Anda'
    }
    this.formDataInput = new FormData(dataInput)
    this.formDataTextArea = new FormData(dataTextArea)
    this.formDataEmail= new FormData(dataEmail)
   }
   reset(){
    this.formEmail.setValue("")
    this.formName.setValue("")
    this.formKomentar.setValue("")
   }
   submit(){
    if(!this.formEmail.value) this.formEmail.markAsDirty()      
    if(!this.formName.value) this.formName.markAsDirty()      
    if(!this.formKomentar.value) this.formKomentar.markAsDirty()      
    if(this.formEmail.value && this.formName.value&& this.formKomentar.value) window.location.reload()
   }
}
