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
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
    this.alertSystem.error('شما به این قسمت دسترسی ندارید', 'دسترسی غیرمجاز');
    this.router.navigate(['auth/login'],{
      queryParams: {
        return: state.url
      }
    });
    return false;
    }

  }
}
