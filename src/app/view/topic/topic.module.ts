import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic.component';



@NgModule({
  declarations: [TopicComponent],
  exports:[TopicComponent],
  imports: [
    CommonModule
  ]
})
export class TopicModule { }
