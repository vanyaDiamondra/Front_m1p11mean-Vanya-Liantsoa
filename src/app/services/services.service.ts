import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {baseurl} from './routeconfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  constructor(private http: HttpClient) { }

  async getServices(): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/service').toPromise();
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

  async getServicesCategories(): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/service/categories').toPromise();
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

  async searchServices(nom: String): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/service/search?nom='+nom).toPromise();
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

  async getServicesByID(id: string | undefined | null): Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    try {
      const result = await this.http.get<any>(baseurl + '/service/client?token='+token+'&_id='+id).toPromise();
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

  async searchByCategories(categorieID: String): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/service/search?categorieID='+categorieID).toPromise();
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

  async getPrefServices():Promise<any[]> {
    const token = window.localStorage.getItem('tokenuser');
    try {
      const result = await this.http.get<any>(baseurl + '/service/prefService?token='+token).toPromise();
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



  updateServiceInfo(data :any,id:string) :Observable<any> {
    return this.http.post(baseurl+'/service/update/'+id, data);
  }
  createService(data :any) :Observable<any> {
    return this.http.post(baseurl+'/service/create', data);
  }

  getUserInfo(id:string):Promise<any> {
    return this.http.get<any>(baseurl + '/service/findbyid/'+id).toPromise();
  }



}
