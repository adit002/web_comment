import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilService } from './util.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UtilService
  ]
})
export class CoreModule { }
