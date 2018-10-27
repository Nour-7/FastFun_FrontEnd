import { Component } from '@angular/core';
import {MessagesComponent} from '../app/Messages.component'

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
  PSSocial
  <button mat-button routerLink="/users">Users</button>
  <span style="flex: 1 1 auto"></span>
  <button mat-button routerLink="/register">Register</button>
  </mat-toolbar>
  <router-outlet> </router-outlet>


  `
  
})
export class AppComponent {
  
  title = 'FrontEnd';
  
}
