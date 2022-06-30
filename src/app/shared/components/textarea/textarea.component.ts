import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormData } from '../component.service'
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input() formData!: FormData;
  @Input() fc!: FormControl;

}
