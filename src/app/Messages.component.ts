import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'
@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of apiService.massages">
            <mat-card>{{message.msg}}</mat-card>
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
     pname : String ="Taboula"
    
    ngOnInit() {

        // var place = this.route.snapshot.params.pname
        // this.apiService.getMessages(place);
        this.apiService.getMessages(this.pname);
    
    }


}
