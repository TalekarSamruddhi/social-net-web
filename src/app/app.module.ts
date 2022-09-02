import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthUserService} from './services/auth-user.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FirebaseTSApp} from 'firebasets/firebasetsApp/firebaseTSApp';
import {environment} from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component'
import {MatButtonModule} from '@angular/material/button';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmailVerComponent } from './pages/email-ver/email-ver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent,
    EmailVerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
   
  ],
  providers: [AuthUserService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig)
  }
}
