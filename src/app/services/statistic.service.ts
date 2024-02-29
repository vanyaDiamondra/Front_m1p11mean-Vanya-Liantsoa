import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseurl} from './routeconfig';

@Injectable({
  providedIn: 'root'
})


export class StatisticService {

  constructor(private http: HttpClient) { }

  async getTempsMoyenEmploye(): Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    const result = await this.http.get<any[]>(baseurl + '/stat/avgemp?token='+token).toPromise();
    if (result !== undefined) {
      return result;
    }
    return [];  
  }

  async getNbReservation(month: any): Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    var url = baseurl + '/stat/reservation?token='+token;
    if( month !== null ){
      url  = url + '&mois='+month;
    }

    const result = await this.http.get<any[]>(url).toPromise();
    if (result !== undefined) {
      return result;
    }
    return [];  
  }

  async getChiffreAffaire(month: any): Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    var url = baseurl + '/stat/ca?token='+token;
    if( month !== null ){
      url  = url + '&mois='+month;
    }

    const result = await this.http.get<any[]>(url).toPromise();
    if (result !== undefined) {
      return result;
    }
    return [];  
  }

  async getBenefice(month: any): Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    var url = baseurl + '/stat/benefice?token='+token;
    if( month !== null ){
      url  = url + '&mois='+month;
    }

    const result = await this.http.get<any[]>(url).toPromise();
    if (result !== undefined) {
      return result;
    }
    return [];  
  }

}
