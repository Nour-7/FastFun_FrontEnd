import { Component } from '@angular/core';
import { ApiSrevice } from './api.service';

@Component({
    selector: 'useres',
    template: `
  <div *ngFor="let user of apiservice.users" >
    <mat-card [routerLink]="['/profile' ,user._id]" style="cursor: pointer">{{user.email}}</mat-card>
  </div>
  `

})
export class UsersComponent {
    constructor(private apiservice: ApiSrevice) { }
    ngOnInit() {
        this.apiservice.getUsers();
    }
}
