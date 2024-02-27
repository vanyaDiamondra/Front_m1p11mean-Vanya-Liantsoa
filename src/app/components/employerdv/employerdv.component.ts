import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employerdv',
  templateUrl: './employerdv.component.html',
  styleUrls: ['./employerdv.component.css']
})
export class EmployerdvComponent implements OnInit {

  rdvList: any[] | undefined = [];
  chargementEnCours: boolean = true;
  filterCriteria = 0;

  months = [
    {value: 1, label: 'Janvier'}, 
    {value: 2, label: 'Février'},  
    {value: 3, label: 'Mars'},
    {value: 4, label: 'Avril'},
    {value: 5, label: 'Mai'},
    {value: 6, label: 'Juin'},
    {value: 7, label: 'Juillet'},
    {value: 8, label: 'Aôut'},
    {value: 9, label: 'Septembre'},
    {value: 10, label: 'Octobre'},
    {value: 11, label: 'Novembre'},
    {value: 12, label: 'Décembre'}
  ];

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.getRdv();
    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);
  }

  async getRdv() {
    this.rdvList = await this.employeService.rdvEmploye();
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

  async filterRdv(){
   this.rdvList = await this.employeService.filterrdvEmploye(this.filterCriteria);
  }

}
