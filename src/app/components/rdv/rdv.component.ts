import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RdvService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

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

  dateEtHeureRdv: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private servicesService: ServicesService, private rdvService: RdvService)
  { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?.toString();
    this.getServiceByID(id);
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 600);
  }

  afficherAlerte(feedBackRdv: any) {
    const rdv = feedBackRdv.rdv;

    if( rdv.date === undefined ){
      const htmlMessage = '<div style="text-align: left; padding: 2px;">'+
      '<p style="color: tomato;">'+ feedBackRdv.message + '</p>' +
      '</div>';

      Swal.fire({
        title: 'Oops',
        html: htmlMessage,
        icon: 'question',
        width: '600px',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#FFB0B0',

      }).then((result) => {});
    }

    else{
      const htmlMessage = '<div style="text-align: left; padding: 2px;">'+
      '<p><b>Service</b> : '+ rdv.service.nom + '</p>' +
      '<p><b>Date et heure</b> : '+ this.getDateFromString(rdv.heure_debut) + ' à '+ this.getTimeFromString(rdv.heure_debut)+' - '+this.getTimeFromString(rdv.heure_fin)+ '</p>' +
      '<b>Avec</b> : '+rdv.employe.nom+' '+rdv.employe.prenom +'</p>' +
      '<p style="color: tomato;">'+ feedBackRdv.message + '</p>' +
      '</div>';

      Swal.fire({
        title: 'Veuillez-confirmer',
        html: htmlMessage,
        icon: 'question',
        width: '600px',
        showCancelButton: true,
        confirmButtonText: 'Valider',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#FFB0B0',

      }).then((result) => {
        if (result.isConfirmed) {
          this.fonctionOK(rdv);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
    }
  }

  fonctionOK(rdv: any) {
    window.localStorage.setItem("lastrdv", JSON.stringify(rdv));
    this.router.navigate(['/paiement']);
  }

  async getServiceByID(id: string | undefined | null) {
      this.services = await this.servicesService.getServicesByID(id);
      this.employeePreferee = await this.services.employePreferee;
  }

  async prendreRdv() {
    const feedBackRdv = await this.rdvService.prendreRendezVous(this.services._id, this.dateEtHeureRdv);
    this.afficherAlerte(feedBackRdv);
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

  getDateFromString(dateObj: string){
    return dateObj.split('T')[0];
  }

  getTimeFromString(dateObj: string){
    return dateObj.split('T')[1].substring(0, 5);
  }

}
