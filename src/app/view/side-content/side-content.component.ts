import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.scss']
})
export class SideContentComponent implements OnInit {
  side = {
    judul:'Diskusi 5 teratas',
    text1:'Bersihkan laptop dari butiran debu',
    text2:'Cara akses website menggunakan koneksi openVpn',
    text3:'Batas aman overClock PC rakitan',
    text4:'Cara mengetahui akun Facebook di-hack melalui aplikasi',
    text5:'Tutotial : langkah - langkah mencegah website untuk track user'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
