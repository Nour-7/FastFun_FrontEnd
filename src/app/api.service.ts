import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()
export class ApiSrevice {
    constructor(private http: Http) { }
    messages = [];
    users = [];
    getMessages() {
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.messages = res.json()
        })
    }
    getUsers() {
        this.http.get('http://localhost:3000/users').subscribe(res => {
            this.users = res.json()
        })
    }
    getProfile(id) {
       return this.http.get('http://localhost:3000/profile/'+id)
    }
}
