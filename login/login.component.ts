import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  emailAddress: string = 'sada@gmail.com';
  password: string = '123';
  imgUrl: string = "http://s1.picswalls.com/wallpapers/2014/02/08/spring-desktop-background_03111888_25.jpg";
  constructor(private toastrService: ToastrService) {

  }
  login() {
    //API call 
    let userInfo = [{ email: 'sumalatha@gmail.com', password: '12345', isAdmin: false },
       { email: 'admin@gmail.com', password: '123', isAdmin: true }];
    let filterUser = userInfo.filter(x => x.email === this.emailAddress && x.password == this.password);
    if (filterUser && filterUser.length > 0) {
      localStorage.setItem('isAuthenticated', 'True');
      if (filterUser[0].isAdmin) {
        localStorage.setItem('isAdmin', 'True');
      }
      this.toastrService.success('Login is successfull..!');
    }
    else {
      this.toastrService.error('Invalid credentials..!');
    }
  }
}
