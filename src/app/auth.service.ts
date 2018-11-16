import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthService {
    messages = [];
    path = 'http://localhost:3000/auth'

    TOKEN_KEY = 'token'
     constructor(private http: HttpClient) { }

    get token(){
        return localStorage.getItem(this.TOKEN_KEY)
    }
    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }
    logout(){
        localStorage.removeItem(this.TOKEN_KEY)
    }

   registerUser(registerData) {
    return this.http.post<any>(this.path + '/register', registerData).pipe(map(res => {
            this.saveToken(res.token)
        }))
    }    
    loginUser(loginData) {

        return this.http.post<any>(this.path + '/login', loginData).pipe(map(res=>{
            this.saveToken(res.token)
        }))
        
    }
    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY, token)

    }

}
