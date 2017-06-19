import { Component, OnInit } from '@angular/core';
import {AppAuthService} from "../auth/app-auth.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl: string;

  constructor(private authService: AppAuthService) { }

  ngOnInit() {
    this.imageUrl = 'https://s3-us-west-2.amazonaws.com/star-wars-characters/star-wars-logo.png';
  }

  login() {
    this.authService.loginWithEmailAndPassword('test@test.com', 'supertest');
  }

}
