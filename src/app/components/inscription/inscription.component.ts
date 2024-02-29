import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html'
})

export class InscriptionComponent implements OnInit {

  user = { nom:'',prenom:'',contact:'',sexe:'',date_naissance:'',email:'', mdp:'',type:1};
  feedBack = { message: ''};
  chargementEnCours: boolean = false;

  constructor(private userService: UserService, private router: Router) {   }

  ngOnInit(): void {

  }

  doSignIn(): any {
    this.chargementEnCours = true;

    this.userService.inscription(this.user).subscribe(
      response => {
        this.chargementEnCours = false;

        Swal.fire({
          title: 'Inscription confirmé',
          text: response.message,
          icon: 'success',
          width: '600px',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#FFB0B0',
  
        }).then((result) => {});

        this.feedBack = response;
      },
      error => {
        this.chargementEnCours = false;

        Swal.fire({
          title: 'Oops',
          text: error.error.message,
          icon: 'error',
          width: '600px',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#FFB0B0',
  
        }).then((result) => {});

        this.feedBack.message=error.error.message;

      }
    );
  }

}



