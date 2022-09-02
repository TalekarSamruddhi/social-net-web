import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthenticatorComponent} from './tools/authenticator/authenticator.component';
import {AuthUserService} from './services/auth-user.service';
import {EmailVerComponent} from './pages/email-ver/email-ver.component'
const routes: Routes = [
  {
    path:"home", component: HomeComponent, resolve: [AuthUserService]
  },
  {
    path:"", component: AuthenticatorComponent
  },
  {
    path:"emailVerification", component: EmailVerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
