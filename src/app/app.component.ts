import { Component } from '@angular/core';
import {AppAuthService} from "./auth/app-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title : string = 'Star Wars Characters';

  constructor(private authService: AppAuthService) {}

}
