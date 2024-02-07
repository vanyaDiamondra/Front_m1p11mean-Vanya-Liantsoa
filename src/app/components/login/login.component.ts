import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  user = { email: '', motdepasse: ''};
  feedBack = { status: '', message: '', token: ''};

  constructor(private userService: UserService, private router: Router) {   }

  ngOnInit(): void {
  }

  doLogin(): any {
    this.feedBack = this.userService.login(this.user);

    if( this.feedBack.status === "200" ){
      window.localStorage.setItem('tokenuser', this.feedBack.token);
      this.router.navigate(['/home']);
    }
  }
}
