import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';
@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let comment of comments">
            <mat-card>{{comment.msg}}</mat-card>
    </div>
  `

})

export class MessagesComponent {
    constructor(private apiService: ApiService ,private route: ActivatedRoute) { }
    placeData : any
   @Input() pname : String =""
    comments = []
    
    ngOnInit() {

        // var place = this.route.snapshot.params.pname
        // this.apiService.getMessages(place);
        this.apiService.getMessages(this.pname).subscribe(res =>{
            this.comments = res
        });
    
    }


}
