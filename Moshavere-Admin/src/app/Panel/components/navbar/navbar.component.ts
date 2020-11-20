import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private alertService: ToastrService, public authService: AuthService) { }
  jwtHelper = new JwtHelperService();
  ngOnInit() {
    this.getDecodedToken();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
    this.alertService.info('شما با موفقیت از پنل کاربری خارج شدید', 'خروج');
  }
  getDecodedToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

}
