import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import { DepenseService } from 'src/app/services/depense.service';


@Component({
  selector: 'app-depenseedit',
  templateUrl: './depenseedit.component.html'
})

export class DepenseEditComponent implements OnInit {

  profil: any = {};
  depensesCategoriesList: any[] = [];
  selectedOption: any = {};


  constructor(private userService: DepenseService , private router: Router, private route: ActivatedRoute) {   }

  ngOnInit(): void {
    this.getInfo();
    this.getDepenseCategories();
  }
  doSignIn(): any {

    console.log(this.selectedOption);
    if(Object.keys(this.selectedOption).length != 0){
      this.profil.categorie = this.selectedOption;

    }

    const serviceId = this.route.snapshot.params.id;
    this.userService.updateDepenseInfo(this.profil,serviceId).subscribe(
      response => {
        console.log('Server Response:', response);
        this.router.navigate(['/depenselist']);
      },
      error => {
        console.error('Error:', error.error);
        this.router.navigate(['/depenselist']);

      }
    );
  }
  async getDepenseCategories() {
    this.depensesCategoriesList = await this.userService.getDepenseCategories();
  }

  async getInfo() {
    const userId = this.route.snapshot.params.id;
    this.profil = await this.userService.getUserInfo(userId);
  }


}
