import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentService } from 'src/app/shared/components/component.service';

@NgModule({
  declarations: [RegisterComponent],
  exports:[RegisterComponent],
  imports: [
    CommonModule,SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ComponentService
  ]
})
export class RegisterModule { }
