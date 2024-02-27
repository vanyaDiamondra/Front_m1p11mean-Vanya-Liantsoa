import { Injectable } from '@angular/core';
import {baseurl} from './routeconfig';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RdvService {

  constructor(private http: HttpClient, private router: Router) { }

  async prendreRendezVous(serviceId: string, dateEtHeureRdv: string): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    const rdv = {
      token: token,
      serviceId: serviceId,
      dateEtHeureRdv: dateEtHeureRdv,
    };
    try {
      const result = await this.http.post<any[]>(baseurl + '/rdv/check', rdv).toPromise();
      if (result !== undefined) {
          return result;
      } else {
          throw new Error('Donnée non définie');
      }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }


  }

  async paiementRdv(rdv:any): Promise<any[]>  {
    try {
      const result = await this.http.post<any[]>(baseurl + '/rdv', rdv).toPromise();
      if (result !== undefined) {
          return result;
      } else {
          throw new Error('Donnée non définie');
      }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
  }

  async historiqueRdv(): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    try {
      const result = await this.http.get<any[]>(baseurl + '/rdv?token='+token).toPromise();
      if (result !== undefined) {
          return result;
      } else {
          throw new Error('Donnée non définie');
      }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }

  }

}
