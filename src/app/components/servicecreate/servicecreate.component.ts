import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import { EmployeService } from '../../services/employe.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-servicecreate',
  templateUrl: './servicecreate.component.html'
})

export class ServiceCreateComponent implements OnInit {

  profil: any = {};
  servicesCategoriesList: any[] = [];
  selectedOption: any = {};


  constructor(private userService: ServicesService, private router: Router, private route: ActivatedRoute) {   }

  ngOnInit(): void {

    this.getServiceCategories();
  }
  doSignIn(): any {

    console.log(this.selectedOption);
    if(Object.keys(this.selectedOption).length != 0){
      this.profil.id_categorie = this.selectedOption._id;
      this.profil.nom_categorie =  this.selectedOption.nom;
    }


    this.userService.createService(this.profil).subscribe(
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




}
