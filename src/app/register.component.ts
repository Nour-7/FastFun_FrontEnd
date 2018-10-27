import { Component } from '@angular/core';
import { AuthSrevice } from './auth.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',

})
export class RegisterComponent {
    registerData= {}
    constructor(private authservice: AuthSrevice) { }

    post(){
        console.log(this.registerData)
        this.authservice.registerUser(this.registerData)
    }

}
