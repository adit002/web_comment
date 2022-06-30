import { Component, Input } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormData } from '../component.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() formData!: FormData;
  @Input() fc!: FormControl;
}
