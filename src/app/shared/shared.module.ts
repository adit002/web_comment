import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './components/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentService } from './components/component.service';

@NgModule({
  declarations: [],
  exports:[ComponentModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ComponentService
  ]
})
export class SharedModule { }
