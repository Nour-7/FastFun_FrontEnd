import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import {MatButtonModule ,MatCardModule,MatToolbarModule ,MatInputModule ,MatListModule} from '@angular/material'
import { MessagesComponent } from './Messages.component'
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthSrevice } from './auth.service';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.componnent';
import { PostComponent } from './post.component';



const routes = [
  { path: '', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    

  ],
  providers: [ApiService,AuthSrevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
