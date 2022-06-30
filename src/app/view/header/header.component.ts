import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  smalIconNav = false
  showMobileMenu = false
  dataHeader = {
   title:'Forum anak IT',
   menu1:'Categories',
   menu2:'Login',
   menu3:'Register',
   submenu1:'Linux',
   submenu2:'Windows',
   submenu3:'MAC OS',
   submenu4:'Android',
   submenu5:'iOS',
  }
  @Output() onClickNac = new EventEmitter<string>();
  constructor() {     this.getScreenSize()
}
  navClick(type:string){
    this.onClickNac.emit(type)
  }
  clickSmallIconNav(){
    this.smalIconNav = !this.smalIconNav ? true:false
    this.showMobileMenu = this.smalIconNav
  }
  closeMobileNav(){
    this.showMobileMenu = false
    this.smalIconNav = false
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if(window.innerWidth > 950) this.closeMobileNav()
  }
}
