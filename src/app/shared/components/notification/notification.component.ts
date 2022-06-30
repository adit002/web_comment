import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit  {
  @Input() fc!: FormControl;
  @Input() id!: string;
  message!: string;
  subscriptions!: Subscription;

  constructor() {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void{
    this.checkStatus();
    this.subscriptions.add(
      this.fc.statusChanges.subscribe(
        status => {
          this.checkStatus();
        }
      )
    )
  }

  private checkStatus(): void {
    if(['VALID'].includes(this.fc.status)) {
      this.message = '';
    } else {
      if(this.fc.hasError('required')) {
        this.message = 'Wajib Diisi';
      }
      if(this.fc.hasError('custom')) {
        this.message = this.fc.getError('custom');
      }
    }
  }
}