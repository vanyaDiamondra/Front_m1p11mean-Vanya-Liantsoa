import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {baseurl} from './routeconfig';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices(): Promise<any[]> {
    return this.http.get<any[]>(baseurl + '/service').toPromise();
  }

  getServicesCategories(): Promise<any[]> {
    return this.http.get<any[]>(baseurl + '/service/categories').toPromise();
  }

  searchServices(nom: String): Promise<any[]> {
    return this.http.get<any[]>(baseurl + '/service/search?nom='+nom).toPromise();
  }

  getServicesByID(id: string | undefined | null): Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    return this.http.get<any[]>(baseurl + '/service/client?token='+token+'&_id='+id).toPromise();
  }

  searchByCategories(categorieID: String): Promise<any[]> {
    return this.http.get<any[]>(baseurl + '/service/search?categorieID='+categorieID).toPromise();
  }

  getPrefServices():Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    return this.http.get<any[]>(baseurl + '/service/prefService?token='+token).toPromise();
  }



}
