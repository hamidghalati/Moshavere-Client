import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth/services/auth.service.js';

@Component({
  selector: 'app-panel',
  templateUrl: './Panel.component.html',
  styleUrls: ['./Panel.component.css']
})
export class PanelComponent implements OnInit {
jwtHelper = new JwtHelperService();
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.getDecodedToken();
  }

  getDecodedToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  loggedIn() {
    return this.authService.loggedIn();
  }


}
