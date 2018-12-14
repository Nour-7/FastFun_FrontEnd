import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { error } from 'util';
@Injectable()
export class AuthService {
    messages = [];
    admin :Number = 0;
    path = 'http://localhost:3000/auth'

    TOKEN_KEY = 'token'
     constructor(private http: HttpClient) { }

    get token(){
        return localStorage.getItem(this.TOKEN_KEY)
    }
    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }
     isAdmin(){
         this.http.get( 'http://localhost:3000/isadmin').subscribe(res =>{},error =>{
            if(error.status == 200){
                this.admin = 1;
            }
            else if(error.status == 401){
               this.admin = 0;
            }
            console.log(this.admin)
        })
        
    }
    logout(){
        localStorage.removeItem(this.TOKEN_KEY)
    }

   registerUser(registerData) {
    return this.http.post<any>(this.path + '/register', registerData).pipe(map(res => {
            this.saveToken(res.token)
            this.isAdmin()
            
        }))
    }    
    loginUser(loginData) {

        return this.http.post<any>(this.path + '/login', loginData).pipe(map(res=>{
            this.saveToken(res.token)
            this.isAdmin()
            
        }))
        
    }
    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY, token)

    }

}
