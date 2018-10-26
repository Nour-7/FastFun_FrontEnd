import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component'
import { ApiSrevice } from './api.service'
import {MatButtonModule ,MatCardModule,MatToolbarModule ,MatInputModule} from '@angular/material'
import { MessagesComponent } from './Messages.component'
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthSrevice } from './auth.service';
import { UsersComponent } from './users.component';



const routes = [
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'users', component: UsersComponent },
  {path: 'profile/:id', component: UsersComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    

  ],
  providers: [ApiSrevice,AuthSrevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
