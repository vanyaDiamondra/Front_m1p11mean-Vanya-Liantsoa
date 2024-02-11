import { Injectable } from '@angular/core';
import {baseurl} from './routeconfig';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RdvService {

  constructor(private http: HttpClient, private router: Router) { }

  prendreRendezVous(serviceId: string, dateEtHeureRdv: string): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    const rdv = {
      token: token,
      serviceId: serviceId,
      dateEtHeureRdv: dateEtHeureRdv,
    };
    
    return this.http.post<any[]>(baseurl + '/rdv/check', rdv).toPromise();
  }

  paiementRdv(rdv:any): Promise<any[]>  {
    return this.http.post<any[]>(baseurl + '/rdv', rdv).toPromise();
  }

  historiqueRdv(): Promise<any[]>  {
    const token = window.localStorage.getItem('tokenuser');
    return this.http.get<any[]>(baseurl + '/rdv?token='+token).toPromise();
  }
  
}
