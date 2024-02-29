import { Component, OnInit } from '@angular/core';
import { EmployeService} from 'src/app/services/employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html'
})
export class EmployelistComponent implements OnInit {

  chargementEnCours: boolean = true;
  employesList: any[] = [];

  donneesAffichees: any[] = [];
  taillePage: number = 9;
  pageActuelle: number = 1;
  pageTotal: number = 0;

  searchElements = { keyWords: '', categorie: ''};

  constructor(private employeService: EmployeService, private router: Router) { }

  ngOnInit(): void {
    this.goAccueil();
    this.getEmployes();
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);

  }

  goAccueil() {
    const token = window.localStorage.getItem('tokenuser');
   if( token == null ){
    this.router.navigate(['/']);
   } else{
    this.router.navigate(['/emplist']);
   }
  }



  async getEmployes() {
    this.employesList = await this.employeService.getEmployes();
    this.donneesAffichees = this.getPageSlice(this.employesList, this.pageActuelle);
    this.pageTotal = Math.ceil(this.employesList.length / this.taillePage);

  }

  async searchKeyWords() {
    this.employesList = await this.employeService.searchEmployes(this.searchElements.keyWords);
    this.donneesAffichees = this.getPageSlice(this.employesList, this.pageActuelle);
    this.pageTotal = Math.ceil(this.employesList.length / this.taillePage);
  }




  getPageSlice(data: any[], page: number): any[] {
    const startIndex = (page - 1) * this.taillePage;
    const endIndex = startIndex + this.taillePage;
    return data.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.pageActuelle = page;
    this.donneesAffichees = this.getPageSlice(this.employesList, this.pageActuelle);
  }

  getPageNumbers(): number[] {
    return Array(this.pageTotal).fill(0).map((_, index) => index + 1);
  }

  getFormattedPrice(prix: number) {
    const formattedPrice = prix.toLocaleString('fr-FR');
    return formattedPrice.replace(/\s/g, '.');
  }
  update(id: string){
    this.router.navigate(['/employeedit/'+id]);
  }

}
