import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule, 
  MatListModule,
  MatFormFieldModule
  } from '@angular/material'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
 
//import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.componnent'
import { PostComponent } from './post.component'
import { AuthInterceptorService }  from './authInterceptor.service'
import { HomeComponent } from './home.component';
import { ItemComponent } from './item.component';
import { ImapComponent } from './imap.component';
 
const routes = [
  { path : '', component : HomeComponent },
  { path : 'post', component : PostComponent},
  { path : 'register', component : RegisterComponent },
  { path : 'login', component : LoginComponent },
  { path : 'users', component : UsersComponent },
  { path : 'profile/:id', component : ProfileComponent },
  { path : 'item/:pname', component : ItemComponent }
]
 
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent, 
    LoginComponent, 
    UsersComponent,
    ProfileComponent,
    PostComponent,
    HomeComponent,
    ItemComponent,
    ImapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatFormFieldModule,
    RouterModule.forRoot(routes),
   // AppRoutingModule, 
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
