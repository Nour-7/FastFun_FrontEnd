import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'
@Component({
    selector: 'messages',
    template: `
  <div *ngFor="let message of apiservice.messages" >
    <mat-card>{{message.msg}}</mat-card>
  </div>
  `

})
export class MessagesComponent {
    constructor(private apiservice: ApiService ,private route: ActivatedRoute) { }
    ngOnInit() {
        var userId = this.route.snapshot.params.id
        
        this.apiservice.getMessages(userId);
    }
}
