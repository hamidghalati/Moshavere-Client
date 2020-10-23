import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = 'https://localhost:44355/MehrAvaran/admin/auth/';
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
}
