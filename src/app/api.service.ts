import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
    messages = []
    users = []
    placeInfo = {}
    path = 'http://localhost:3000'

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

    getCategories() {
        return this.http.get<any>(this.path + '/category');
    }
   

}