import { Component } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent{
  topic = {
    label1 : 'Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam',
    label2:'Mau tanya , akhir-akhir ini webcam sering nyala sendiri. apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu ? apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi di internet'
  }
  constructor() { }

}
