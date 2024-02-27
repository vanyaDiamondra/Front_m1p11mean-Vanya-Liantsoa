import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { EmployeService } from 'src/app/services/employe.service';


@Component({
  selector: 'app-employetaches',
  templateUrl: './employetaches.component.html',
  styleUrls: ['./employetaches.component.css']
})
export class EmployetachesComponent implements OnInit {

  rdvList: any[]= [];
  doneRdvList: any[]= [];
  chargementEnCours: boolean = true;
  filterCriteria = '';

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.getTaches();
    this.getTachesFinis();

    setTimeout(() => {
      this.chargementEnCours = false;
    }, 1000);
  }

  async getTaches() {
    this.rdvList = await this.employeService.dailyTasks();
  }

  async getTachesFinis() {
    this.doneRdvList = await this.employeService.doneDailyTasks();
  }

  async filterRdv(){
    this.rdvList = await this.employeService.dailyTasks(this.filterCriteria);
    this.doneRdvList = await this.employeService.doneDailyTasks(this.filterCriteria);
  }

  drop(event: CdkDragDrop<string[]>) {
    const item = event.item.data;

    if (event.container.data === this.rdvList) {
        this.rdvList.splice(event.previousIndex, 1);
        this.doneRdvList.splice(event.currentIndex, 0, item);

        this.employeService.addTaskDone(item._id);
    } 
    else if (event.container.data === this.doneRdvList) {
        this.doneRdvList.splice(event.previousIndex, 1);
        this.rdvList.splice(event.currentIndex, 0, item);

        this.employeService.rollBackTaskDone(item._id);
    }
  }

  calculCommission(commission: number, prix: number) {
    return prix * (commission / 100);
  }

  sommeCommission() {
    var summ = 0;
    for( var i = 0; i < this.doneRdvList.length; i++ ){
      summ += this.calculCommission( this.doneRdvList[i].service.commission, this.doneRdvList[i].service.prix );
    }
    return summ;
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
