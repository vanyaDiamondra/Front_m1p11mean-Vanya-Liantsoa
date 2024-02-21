import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  user = { email: 'liliandrianaivomamonjisoa@gmail.com', mdp: 'lili'};
  feedBack = { status: '', message: '', token: '', profilId: 0};

  constructor(private userService: UserService, private router: Router) {   }

  ngOnInit(): void {
  }

  doLogin(): any {
    this.userService.login(this.user).subscribe(
      response => {
          this.feedBack = response;
          if( this.feedBack.status === "200" ){
            window.localStorage.setItem('tokenuser', this.feedBack.token);

            if( this.feedBack.profilId === 1 ){
              this.router.navigate(['/accueil']);
            } else if( this.feedBack.profilId === 2){
              this.router.navigate(['/employe']);
            } else if( this.feedBack.profilId === 3 ){
              this.router.navigate(['/manager']);
            }
          
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

