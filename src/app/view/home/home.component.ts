import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  show = {
    login:false,
    register:false
  }
  dataHome = {
    text1:'Komentar',
    text2:'Tambahkan Komentar'
  }
  constructor() { }


   getDataClickNav(type:string){
    this.show.login = type == 'login'
    this.show.register = type == 'register'
   }
   closeModalLogin(triger:boolean){
    this.show.login = triger
   }
   closeModalRegister(triger:boolean){
    this.show.register = triger
   }
}
