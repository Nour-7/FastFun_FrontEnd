import { Component } from '@angular/core';
import { AuthSrevice } from './auth.service';

@Component({
    selector: 'register',
    template: `
    <mat-card>
     <mat-card-header>
        <mat-card-title>
        <h4>Regirster New User</h4>
        </mat-card-title> 
     </mat-card-header>

     <mat-card-content> 

        <form>
            <mat-form-field >
            <input [(ngModel)]="registerData.email" name="email" matInput placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field >
            <input [(ngModel)]="registerData.pwd" name="Password"  matInput placeholder="Password" type="password">
            </mat-form-field>
            <button (click)="post()" mat-raised-button color="primary">Register</button>
            </form>
        </mat-card-content>


    </mat-card>


  `,

})
export class RegisterComponent {
    registerData= {}
    constructor(private authservice: AuthSrevice) { }

    post(){
        console.log(this.registerData)
        this.authservice.registerUser(this.registerData)
    }

}
