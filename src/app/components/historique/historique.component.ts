import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  rdvList: any[] = [];
  chargementEnCours: boolean = true;

  constructor(private rdvService: RdvService) { }

  ngOnInit(): void {
    this.historique();
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);
  }

  async historique(){
    this.rdvList = await this.rdvService.historiqueRdv();
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
