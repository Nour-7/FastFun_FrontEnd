import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
    messages = []
    users = []
    placeInfo = {}
    path = 'http://localhost:3000'

    TOKEN_KEY = 'token'
    constructor( private http: HttpClient) {}

    getMessages(userId) {
        this.http.get<any>(this.path + '/posts/' + userId).subscribe(res => {
            this.messages = res
        })
    }

    postMessage(message) {
        this.http.post(this.path + '/post', message,{responseType: 'text'}).subscribe(res => {
        })
    }

    getUsers() {
        this.http.get<any>(this.path + '/users').subscribe(res => {
            this.users = res
        })
    }

    getProfile(id) {
        return this.http.get(this.path + '/profile/' + id)
    }

    getItem(id) {
        return this.http.get(this.path + '/item/' + id)
    }
    getPlaceInfo(pName) { 
        return this.http.get(this.path + '/place/' + pName);
    }

    getPlaces() {
        return this.http.get<any>(this.path + '/places');
    }

    getPlacesByCategory(name) {
        return this.http.get<any>(this.path + '/category/' + name);
    }

    addItem(registerData) {
        return this.http.post<any>(this.path + '/register', registerData).pipe(map(res => {
                this.saveToken(res.token)
        }))
    }    
    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY, token)

    }
    getCategories() {
        return this.http.get<any>(this.path + '/category');
    }
   
}