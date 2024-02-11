import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/services/rdv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  rdv: any;

  constructor(private rdvService: RdvService, private router: Router) { }

  ngOnInit(): void {
    const rdvData = window.localStorage.getItem("lastrdv")+"";
    this.rdv = JSON.parse(rdvData);
  }

  async paiement() {
    await this.rdvService.paiementRdv({rdv: this.rdv});
    this.router.navigate(['/rdv']);
  }

  getDateFromString(dateObj: string){
    return dateObj.split('T')[0];
  }

  getTimeFromString(dateObj: string){
    return dateObj.split('T')[1].substring(0, 5);
  }

  getFormattedPrice(prix: number) {
    const formattedPrice = prix.toLocaleString('fr-FR');
    return formattedPrice.replace(/\s/g, '.');
  }

}
