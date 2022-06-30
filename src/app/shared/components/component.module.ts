import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RouterModule } from '@angular/router';
import { TextareaComponent } from './textarea/textarea.component';
import { LabelComponent } from './label/label.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { NotificationComponent } from './notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentService } from './component.service';
@NgModule({
  declarations: [InputComponent,TextareaComponent,LabelComponent,InputEmailComponent,NotificationComponent],
  exports:[InputComponent,TextareaComponent,LabelComponent,InputEmailComponent,NotificationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RouterModule,
    ComponentService
  ]
})
export class ComponentModule { }
