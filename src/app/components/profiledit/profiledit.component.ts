import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profiledit',
  templateUrl: './profiledit.component.html'
})

export class ProfileEditComponent implements OnInit {

  user = { nom:'',prenom:'',contact:'',date_naissance:'',token:'',debut:'',fin:''};
  profil: any = {};


  constructor(private userService: UserService, private router: Router) {   }

  ngOnInit(): void {
    this.getInfo();
  }
  doSignIn(): any {

    this.user.token =  window.localStorage.getItem('tokenuser')||'';
    this.user.nom = this.profil.nom;
    this.user.prenom = this.profil.prenom;
    this.user.contact = this.profil.contact;
    this.user.date_naissance = this.profil.date_naissance;
    this.user.debut = this.profil.debut;
    this.user.fin = this.profil.fin;

    this.userService.updateUserInfo(this.user).subscribe(
      response => {
        console.log('Server Response:', response);
        this.router.navigate(['/profil']);
      },
      error => {
        console.error('Error:', error.error);
        this.router.navigate(['/profil']);

      }
    );
  }

  async getInfo() {
    this.profil = await this.userService. getUserInfo();
  }

}
