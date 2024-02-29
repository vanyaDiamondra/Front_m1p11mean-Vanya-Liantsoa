import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { EmployeService } from '../../services/employe.service';

@Component({
  selector: 'app-employecreate',
  templateUrl: './employecreate.component.html'
})

export class EmployeCreateComponent implements OnInit {

  user = { nom:'',prenom:'',contact:'',date_naissance:'',sexe:'',mdp:'',email:'',debut:'',fin:''};
  profil: any = {};


  constructor(private userService: EmployeService, private router: Router) {   }

  ngOnInit(): void {

  }
  doSignIn(): any {


    this.user.nom = this.profil.nom;
    this.user.prenom = this.profil.prenom;
    this.user.contact = this.profil.contact;
    this.user.date_naissance = this.profil.date_naissance;
    this.user.email = this.profil.email;
    this.user.debut = this.profil.debut;
    this.user.fin = this.profil.fin;
    this.user.sexe = this.profil.sexe;
    this.user.mdp = this.profil.mdp;

    console.log(this.user)

    this.userService.createEmploye(this.user).subscribe(
      response => {
        console.log('Server Response:', response);
        this.router.navigate(['/emplist']);
      },
      error => {
        console.error('Error:', error.error);
        this.router.navigate(['/emplist']);

      }
    );
  }



}
