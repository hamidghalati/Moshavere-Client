import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router, private alertSystem: ToastrService) {
}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
    this.alertSystem.error('برای ورود باید ابتدا ثبت نام کنید و وارد شوید', 'هشدار');
    this.router.navigate(['auth/login']);
    return false;
    }

  }
}
