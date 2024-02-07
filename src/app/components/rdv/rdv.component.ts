import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html'
})
export class RdvComponent implements OnInit {

  services: any;
  searchElements = { keyWords: '', categorie: ''};

  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?.toString();
    this.getServiceByID(id);
  }

  async getServiceByID(id: string | undefined | null) {
      this.services = await this.servicesService.getServicesByID(id);
  }

  getFormattedPrice(prix: number) {
    const formattedPrice = prix.toLocaleString('fr-FR');
    return formattedPrice.replace(/\s/g, '.');
  }

}
