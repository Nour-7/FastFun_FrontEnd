import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',

})
export class RegisterComponent {
    registerData: any = {}
    ErrorMessage = ""
    constructor(private authService: AuthService, private router: Router) { }

    post() {
        console.log(this.registerData)
        if (this.registerData.pwd && this.registerData.email && this.registerData.name) {
            this.authService.registerUser(this.registerData).subscribe(res => {

                this.router.navigate(['/'])
            }, error => {
                if (error.status == 401) {
                    this.ErrorMessage = "Email is invalid, try another one"
                }
            })
        }
    }
    
    refresh(): void {
        window.location.reload();
      }
}

