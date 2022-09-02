import { Component } from '@angular/core';
import {AuthUserService} from  './services/auth-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social-net-web';

  constructor(public authService: AuthUserService){}
}
