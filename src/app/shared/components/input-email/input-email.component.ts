import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormData } from '../component.service'
@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent {
  @Input() formData!: FormData;
  @Input() fc!: FormControl;
  constructor() { }

}
