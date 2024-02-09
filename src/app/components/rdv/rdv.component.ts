import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html'
})
export class RdvComponent implements OnInit {

  chargementEnCours: boolean = true;
  services: any;
  searchElements = { keyWords: '', categorie: ''};

  preferenceService = 0;
  employeePreferee: any[] = [];

  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?.toString();
    this.getServiceByID(id);
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 600);
  }

  async getServiceByID(id: string | undefined | null) {
      this.services = await this.servicesService.getServicesByID(id);
      this.employeePreferee = await this.services.employePreferee;
  }

  getFormattedPrice(prix: number) {
    const formattedPrice = prix.toLocaleString('fr-FR');
    return formattedPrice.replace(/\s/g, '.');
  }

  setPreferenceService(nouveauScore: number): void {
    this.preferenceService = nouveauScore;
  }

  setPreferenceEmploye(nouveauScore: number, employeId: string): void {
    const nouveauxScores = this.employeePreferee.map(employe => {
      if (employe.id === employeId) {
        return { ...employe, note: nouveauScore };
      }
      return employe;
    });
    this.employeePreferee = nouveauxScores;
  }

}
