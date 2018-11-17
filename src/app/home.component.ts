import { Component } from '@angular/core';
import { AuthService } from './auth.service';
 
@Component({
  selector: 'home',
  templateUrl:'./home.component.html'
})
export class HomeComponent {
 
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor (private authService : AuthService) {}
 
}