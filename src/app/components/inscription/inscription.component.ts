import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html'
})

export class InscriptionComponent implements OnInit {

  user = { nom:'',prenom:'',contact:'',sexe:'',date_naissance:'',email:'', mdp:'',type:1};
  feedBack = { message: ''};

  constructor(private userService: UserService, private router: Router) {   }

  ngOnInit(): void {

  }
  doSignIn(): any {

    this.userService.inscription(this.user).subscribe(
      response => {
        console.log('Server Response:', response);
        this.feedBack = response;
        this.router.navigate(['/inscription']);
      },
      error => {
        console.error('Error:', error.error);
        this.feedBack.message=error.error.message;
        this.router.navigate(['/inscription']);

      }
    );


    // if( this.feedBack.status === "200" ){
    //   window.localStorage.setItem('tokenuser', this.feedBack.token);
    //   this.router.navigate(['/home']);
    // };
    // this.userService.login(this.user).subscribe(
    //   response => {
    //     console.log('Server Response:', response);
    //     this.feedBack = response;
    //     if( this.feedBack.status === "200" ){
    //       window.localStorage.setItem('tokenuser', this.feedBack.token);
    //       this.router.navigate(['/accueil']);
    //     }
    //   },
    //   error => {
    //     console.error('Error:', error.error);
    //     this.feedBack.message=error.error.message;
    //     this.router.navigate(['/']);

    //   }
    // );

  }

}



