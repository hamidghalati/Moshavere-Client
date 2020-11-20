import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = 'https://localhost:44355/MehrAvaran/admin/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseurl + 'login', model).pipe(
    map((resp: any) => {
      const user = resp;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
  );
}

register(model: any) {
  return this.http.post(this.baseurl + 'register', model);
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}


}
