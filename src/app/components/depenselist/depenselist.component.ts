import { Component, OnInit } from '@angular/core';
import { DepenseService} from 'src/app/services/depense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depenselist',
  templateUrl: './depenselist.component.html'
})
export class DepenseListComponent implements OnInit {

  chargementEnCours: boolean = true;
  depensesCategoriesList: any[] = [];
  depensesList: any[] = [];

  donneesAffichees: any[] = [];
  taillePage: number = 9;
  pageActuelle: number = 1;
  pageTotal: number = 0;

  searchElements = { keyWords: '', categorie: ''};

  constructor(private depenseService: DepenseService, private router: Router) { }

  ngOnInit(): void {
    this.goAccueil();
    this.getDepenseCategories();
    this.getDepenses();
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);

  }

  goAccueil() {

  }

  async getDepenseCategories() {
    this.depensesCategoriesList = await this.depenseService.getDepenseCategories();
  }

  async getDepenses() {
    this.depensesList = await this.depenseService.getDepenses();
    this.donneesAffichees = this.getPageSlice(this.depensesList, this.pageActuelle);
    this.pageTotal = Math.ceil(this.depensesList.length / this.taillePage);

  }






  getPageSlice(data: any[], page: number): any[] {
    const startIndex = (page - 1) * this.taillePage;
    const endIndex = startIndex + this.taillePage;
    return data.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.pageActuelle = page;
    this.donneesAffichees = this.getPageSlice(this.depensesList, this.pageActuelle);
  }

  getPageNumbers(): number[] {
    return Array(this.pageTotal).fill(0).map((_, index) => index + 1);
  }

  getFormattedPrice(prix: number) {
    const formattedPrice = prix.toLocaleString('fr-FR');
    return formattedPrice.replace(/\s/g, '.');
  }

  update(id: string){
    this.router.navigate(['/depenseedit/'+id]);
  }

}
