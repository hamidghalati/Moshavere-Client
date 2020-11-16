import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
  constructor(private authService: AuthService, private alertService: ToastrService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertService.success('اطلاعات کاربری شما با موفقیت ثبت گردید', 'ثبت اطلاعات');
    }, err => {
      this.alertService.warning(err, 'خطا');
  });
}

}
