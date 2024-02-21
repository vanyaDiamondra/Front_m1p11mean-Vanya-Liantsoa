import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseurl} from './routeconfig';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient) { }

  rdvEmploye(): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    return this.http.get<any[]>(baseurl + '/employe/rdv?token='+token).toPromise();
  }

  dailyTasks(date: string | undefined = undefined): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    return this.http.get<any[]>(baseurl + '/employe/tasks?token='+token+"&date="+date).toPromise();
  }

  doneDailyTasks(date: string | undefined = undefined): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    return this.http.get<any[]>(baseurl + '/employe/tasks/done?token='+token+"&date="+date).toPromise();
  }

  addTaskDone(_id: string): Promise<any[]>  {
    return this.http.get<any[]>(baseurl + '/employe/tasks/setdone?_id='+_id).toPromise();
  }

  rollBackTaskDone(_id: string): Promise<any[]>  {
    return this.http.get<any[]>(baseurl + '/employe/tasks/rollbackdone?_id='+_id).toPromise();
  }

  filterrdvEmploye(month: number): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    if( month == 0 ) {
      return this.http.get<any[]>(baseurl + '/employe/rdv?token='+token).toPromise();
    } else{
      return this.http.get<any[]>(baseurl + '/employe/rdv?token='+token+'&month='+month).toPromise();
    }
  }

}
