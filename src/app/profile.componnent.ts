import { Component } from '@angular/core';
import { ApiSrevice } from './api.service';
import { ActivatedRoute} from '@angular/router'
@Component({
    selector: 'profile',
    template: `
    <mat-card>
     <mat-card-header>
        <mat-card-title>
        <h4>Profile</h4>
        </mat-card-title> 
     </mat-card-header>
     <mat-card-content> 
    <mat-list>
        <mat-list-item>Name: {{profile?.name}}</mat-list-item>
        <mat-list-item>Email: {{profile?.email}}</mat-list-item>
        <mat-list-item>Description: {{profile?.description}}</mat-list-item>

    </mat-list>

       
        </mat-card-content>


    </mat-card>


  `,

})
export class ProfileComponent {
    profile
    constructor(private apiservice: ApiSrevice, private route: ActivatedRoute)  { }
    ngOnInit(){
        var id =this.route.snapshot.params.id
        
        this.apiservice.getProfile(id).subscribe(data =>{
           this.profile =data.json()
        })
    }

   
}
