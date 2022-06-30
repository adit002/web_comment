import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/core/util.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  dataComments?:any
  dataContent = {
    text1:'point'
  }
  constructor( public utilSvc : UtilService) { }

  ngOnInit(): void {
      this.utilSvc.getComments().subscribe(data => {
        data.forEach((item:any) => {
          item['up'] = '#333333'
          item['down'] = '#333333'
          item['click'] = false
          let dateFormat = new Date (item.date).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
          }).replace(/ /g, ' ').toString()+' '+new Date (item.date).toLocaleString('en-US', { hour: 'numeric', hour12: false }) +':'+ new Date(item.date).getMinutes()
          item.date = dateFormat
          if(item.replies.length){
            item.replies.forEach((element:any) => {
              element['up'] = '#333333'
              element['down'] = '#333333'
              element['click'] = false
              let dateFormat = new Date (element.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
              }).replace(/ /g, ' ').toString()+' '+new Date (element.date).toLocaleString('en-US', { hour: 'numeric', hour12: false }) +':'+ new Date(element.date).getMinutes()
              element.date = dateFormat
            });
          }
        })
        this.dataComments = data
      })
  }

  clickArrow(id:any,type:string){
    this.dataComments.forEach((item:any) => {
        if(item.id == id){
          if(type == 'up' && !item.click) {
            item.up = '#33B95A'
            item.down = '#333333'
          }else if (type == 'down'&& !item.click){
            item.up = '#333333'
            item.down = '#FF5F2D'
          } 
          if(!item.click && type == 'up') item.point += 1
          if(!item.click && type == 'down') item.point -= 1 
          item.click = true
        }
        item.replies.forEach((element:any) => {
          if(element.id == id){
            if(type == 'up' && !element.click) {
              element.up = '#33B95A'
              element.down = '#333333'
            }else if (type == 'down'&& !element.click){
              element.up = '#333333'
              element.down = '#FF5F2D'
            }
            if(!element.click && type == 'up') element.point += 1
          if(!element.click && type == 'down') element.point -= 1 
            element.click = true
          } 
        })
    })
  }
}
