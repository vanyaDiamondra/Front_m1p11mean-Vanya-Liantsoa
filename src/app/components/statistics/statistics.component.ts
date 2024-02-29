import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/services/statistic.service';

@Component({
  selector: 'app-statistics',
  templateUrl: 'statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

  chargementEnCours: boolean = true;

  tempsEmployeList: any[] = [];
  reservationList: any[] = [];
  chiffreAffaireList: any[] = [];
  beneficeList: any[] = [];

  days = Array.from({ length: 31 }, (_, i) => i + 1);
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
  monthsLabels = this.months.map(month => month.label);

  lineOptions = {
    responsive: true,
    showLines: false,
    tension: 0.4,
    scales: {
      y: {
        ticks: {
          stepSize: 5000
        }
      }
    },
  };

  barOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 1
        }
      }
    },
  };

  chartLegend = true;

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.getTempsEmploye();
    this.getNbReservation(null);
    this.getChiffresAffaire(null);
    this.getBenefice(null);

    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);
  }

  async getTempsEmploye() {
    this.tempsEmployeList = await this.statisticService.getTempsMoyenEmploye();
  }

  async getNbReservation(value: any) {
    const reservationData = await this.statisticService.getNbReservation(value);
    const data = [];

    for (let i = 0; i < reservationData.length; i++) {
      const dataItem = reservationData[i];
      data.push(dataItem.count);
    }
    this.reservationList = [{ data: data, label: 'Réservation par jour' }];
  }

  async getChiffresAffaire(value: any) {
    const dataList = await this.statisticService.getChiffreAffaire(value);
    const data = [];

    for (let i = 0; i < dataList.length; i++) {
      const dataItem = dataList[i];
      data.push(dataItem.total);
    }
    this.chiffreAffaireList = [{ data: data, label: "Chiffres d'affaires par jour" }];
  }

  async getBenefice(value: any) {
    const dataList = await this.statisticService.getBenefice(value);
    const data = [];

    for (let i = 0; i < dataList.length; i++) {
      const dataItem = dataList[i];
      data.push(dataItem.benefice);
    }
    this.beneficeList = [{ data: data, label: "Bénéfices par mois" }];
  }

  async filterReservation(event: any) {
    const selectedValue = event.target.value;
    this.getNbReservation(selectedValue);
  } 

  async filterCA(event: any) {
    const selectedValue = event.target.value;
    this.getChiffresAffaire(selectedValue);
  }

  formatNumber(number: number){
    if (number % 1 !== 0) {
      number = +number.toFixed(2);
    }
    return number
  }
}
