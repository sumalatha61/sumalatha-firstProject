import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  emailAddress: string = 'sreeram@outlook.com';
  password: string = '12345';
  imgUrl: string = "https://news.microsoft.com/wp-content/uploads/prod/sites/612/2021/06/cropped-Header_Image.jpg";
  constructor(private toastrService: ToastrService) {

  }
  login() {
    //API call 
    let userInfo = [{ email: 'sreeram@gmail.com', password: '123', isAdmin: false }, { email: 'admin@gmail.com', password: '12345', isAdmin: true }];
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
