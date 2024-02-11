import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicesalon',
  templateUrl: './servicesalon.component.html'
})
export class ServicesalonComponent implements OnInit {

  chargementEnCours: boolean = true;
  servicesCategoriesList: any[] = [];
  servicesList: any[] = [];

  donneesAffichees: any[] = []; 
  taillePage: number = 9; 
  pageActuelle: number = 1;
  pageTotal: number = 0;

  searchElements = { keyWords: '', categorie: ''};

  constructor(private servicesService: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.goAccueil();
    this.getServiceCategories();
    this.getServices();
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);
     
  }

  goAccueil() {
    const token = window.localStorage.getItem('tokenuser');
   if( token == null ){
    this.router.navigate(['/']);
   } else{
    this.router.navigate(['/accueil']);
   }
  }

  async getServiceCategories() {
    this.servicesCategoriesList = await this.servicesService.getServicesCategories();
  }

  async getServices() {
    this.servicesList = await this.servicesService.getServices();
    this.donneesAffichees = this.getPageSlice(this.servicesList, this.pageActuelle);
    this.pageTotal = Math.ceil(this.servicesList.length / this.taillePage);

  }

  async searchKeyWords() {
    this.servicesList = await this.servicesService.searchServices(this.searchElements.keyWords);
    this.donneesAffichees = this.getPageSlice(this.servicesList, this.pageActuelle);
    this.pageTotal = Math.ceil(this.servicesList.length / this.taillePage);
  }

  async searchByCategories(categorieID: String) {
    this.servicesList = await this.servicesService.searchByCategories(categorieID);
    this.donneesAffichees = this.getPageSlice(this.servicesList, this.pageActuelle);
    this.pageTotal = Math.ceil(this.servicesList.length / this.taillePage);
  }


  getPageSlice(data: any[], page: number): any[] {
    const startIndex = (page - 1) * this.taillePage;
    const endIndex = startIndex + this.taillePage;
    return data.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.pageActuelle = page;
    this.donneesAffichees = this.getPageSlice(this.servicesList, this.pageActuelle);
  }

  getPageNumbers(): number[] {
    return Array(this.pageTotal).fill(0).map((_, index) => index + 1);
  }

  getFormattedPrice(prix: number) {
    const formattedPrice = prix.toLocaleString('fr-FR');
    return formattedPrice.replace(/\s/g, '.');
  }

}
