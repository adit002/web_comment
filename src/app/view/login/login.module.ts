import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentService } from 'src/app/shared/components/component.service';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule,SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ComponentService
  ]
})
export class LoginModule {}
