import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';

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
            <input [(ngModel)]="loginData.email" name="email"  required matInput placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field >
            <input [(ngModel)]="loginData.pwd" name="Password"  required matInput placeholder="Password" type="password">
            </mat-form-field>
            <button (click)="post()" mat-raised-button  color="primary">Login</button>
            <div style="color:#cc0000">{{ErrorMessage}}</div>
            </form>
        </mat-card-content>

    </mat-card>
   



  `,

})
export class LoginComponent {
    loginData= {};
    ErrorMessage="";
    constructor(private authservice: AuthService,private router:Router) { }
    
    post(){
        console.log(this.loginData)
        this.authservice.loginUser(this.loginData).subscribe(res =>{
            this.router.navigate(['/'])
        },error =>{
            if(error.status == 401){
                this.ErrorMessage = "Email or Password invalid"
            }
        })
    }

}
