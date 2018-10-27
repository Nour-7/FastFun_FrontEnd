import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'useres',
    template: `
  <div *ngFor="let user of apiservice.users" >
    <mat-card [routerLink]="['/profile' ,user._id]" style="cursor: pointer">{{user.name}}</mat-card>
  </div>
  `

})
export class UsersComponent {
    constructor(private apiservice: ApiService) { }
    ngOnInit() {
        this.apiservice.getUsers();
    }
}
