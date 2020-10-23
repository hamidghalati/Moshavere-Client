import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
login() {
  this.authService.login(this.model).subscribe(next => {
    console.log('logged in');
  }, err => {
      console.log('error');
  }
  );
}
}
