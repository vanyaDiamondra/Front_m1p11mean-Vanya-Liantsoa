import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  user = { email: 'liliandrianaivomamonjisoa@gmail.com', mdp: 'lili'};
  feedBack = { status: '', message: '', token: ''};

  constructor(private userService: UserService, private router: Router) {   }

  ngOnInit(): void {
  }

  doLogin(): any {
    this.userService.login(this.user).subscribe(
      response => {
        console.log('Server Response:', response);
        this.feedBack = response;
        if( this.feedBack.status === "200" ){
          window.localStorage.setItem('tokenuser', this.feedBack.token);
          this.router.navigate(['/accueil']);
        }
      },
      error => {
        console.error('Error:', error.error);
        this.feedBack.message=error.error.message;
        this.router.navigate(['/']);

      }
    );

  }
}

