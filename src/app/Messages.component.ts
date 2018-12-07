import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'
@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of apiService.massages" >
            <mat-card>{{message.msg}}</mat-card>
    </div>
    <div *ngIf="mess">
        <div *ngFor="let message of mess" >
            <mat-card>message</mat-card>
        </div>
    </div>
  `

})
export class MessagesComponent {
    constructor(private apiService: ApiService ,private route: ActivatedRoute) { }
    // e --openmess = ["hii", "wonderfull"]
    // ngOnInit() {
    //     var userId = this.route.snapshot.params.id
        
    //     this.apiService.getMessages(userId);
    // }
    placeData : any
    mess : any
    
    ngOnInit() {

        this.route.params.subscribe(paramMap => {
            this.apiService.getPlaceInfo(paramMap.pname).subscribe(res => {
                this.placeData = res
            });

        });
        // var userId = this.route.snapshot.params.id
        
        this.apiService.getMessages(this.placeData.name);
    
    }


}
