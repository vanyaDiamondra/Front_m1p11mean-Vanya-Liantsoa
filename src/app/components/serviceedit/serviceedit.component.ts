import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import { EmployeService } from '../../services/employe.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-serviceedit',
  templateUrl: './serviceedit.component.html'
})

export class ServiceEditComponent implements OnInit {

  profil: any = {};
  servicesCategoriesList: any[] = [];
  selectedOption: any;


  constructor(private userService: ServicesService, private router: Router, private route: ActivatedRoute) {   }

  ngOnInit(): void {
    this.getInfo();
    this.getServiceCategories();
  }
  doSignIn(): any {
    this.profil.id_categorie = this.selectedOption._id;
    this.profil.nom_categorie =  this.selectedOption.nom;

    const serviceId = this.route.snapshot.params.id;
    this.userService.updateServiceInfo(this.profil,serviceId).subscribe(
      response => {
        console.log('Server Response:', response);
        this.router.navigate(['/servicelist']);
      },
      error => {
        console.error('Error:', error.error);
        this.router.navigate(['/servicelist']);

      }
    );
  }
  async getServiceCategories() {
    this.servicesCategoriesList = await this.userService.getServicesCategories();
  }

  async getInfo() {
    const userId = this.route.snapshot.params.id;
    this.profil = await this.userService.getUserInfo(userId);
  }

}
