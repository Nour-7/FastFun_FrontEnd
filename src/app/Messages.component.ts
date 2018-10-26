import { Component } from '@angular/core';
import { ApiSrevice } from './api.service';

@Component({
    selector: 'messages',
    template: `
  <div *ngFor="let message of apiservice.messages" >
    <mat-card>{{message.message}}</mat-card>
  </div>
  `

})
export class MessagesComponent {
    constructor(private apiservice: ApiSrevice) { }
    ngOnInit() {
        this.apiservice.getMessages();
    }
}
