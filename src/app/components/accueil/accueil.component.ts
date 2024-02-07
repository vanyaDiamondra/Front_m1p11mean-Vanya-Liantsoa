import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  servicesCategoriesList: any[] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.getServiceCategories();
  }

  async getServiceCategories() {
    this.servicesCategoriesList = await this.servicesService.getServicesCategories();
  }



}