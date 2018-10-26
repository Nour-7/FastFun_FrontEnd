import { Component } from '@angular/core';
import { AuthSrevice } from './auth.service';

@Component({
    selector: 'login',
    template: `
    <mat-card>
     <mat-card-header>
        <mat-card-title>
        <h4>Login New User</h4>
        </mat-card-title> 
     </mat-card-header>

     <mat-card-content> 

        <form>
            <mat-form-field >
            <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field >
            <input [(ngModel)]="loginData.pwd" name="Password"  matInput placeholder="Password" type="password">
            </mat-form-field>
            <button (click)="post()" mat-raised-button color="primary">Login</button>
            </form>
        </mat-card-content>


    </mat-card>


  `,

})
export class LoginComponent {
    loginData= {}
    constructor(private authservice: AuthSrevice) { }

    post(){
        console.log(this.loginData)
        this.authservice.loginUser(this.loginData)
    }

}
