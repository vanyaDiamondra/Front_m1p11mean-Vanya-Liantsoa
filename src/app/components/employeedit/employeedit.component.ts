import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import { EmployeService } from '../../services/employe.service';

@Component({
  selector: 'app-employeedit',
  templateUrl: './employeedit.component.html'
})

export class EmployeEditComponent implements OnInit {

  user = {nom:'',prenom:'',contact:'',date_naissance:'',email:'',debut:'',fin:''};
  profil: any = {};


  constructor(private userService: EmployeService, private router: Router, private route: ActivatedRoute) {   }

  ngOnInit(): void {
    this.getInfo();
  }
  doSignIn(): any {


    const userId = this.route.snapshot.params.id;
    this.user.nom = this.profil.nom;
    this.user.prenom = this.profil.prenom;
    this.user.contact = this.profil.contact;
    this.user.date_naissance = this.profil.date_naissance;
    this.user.email = this.profil.email;
    this.user.debut = this.profil.debut;
    this.user.fin = this.profil.fin;

    this.userService.updateEmployeInfo(this.user,userId).subscribe(
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
    const userId = this.route.snapshot.params.id;
    this.profil = await this.userService.getUserInfo(userId);
  }

}
