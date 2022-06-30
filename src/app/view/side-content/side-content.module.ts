import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideContentComponent } from './side-content.component';



@NgModule({
  declarations: [SideContentComponent],
  exports:[SideContentComponent],
  imports: [
    CommonModule
  ]
})
export class SideContentModule { }
