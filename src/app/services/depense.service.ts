import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseurl} from './routeconfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  constructor(private http: HttpClient) { }

  updateDepenseInfo(data :any,id:string) :Observable<any> {
    return this.http.post(baseurl+'/depense/update/'+id, data);
  }
  createDepense(data :any) :Observable<any> {
    return this.http.post(baseurl+'/depense/create', data);
  }

  getUserInfo(id:string):Promise<any> {

    return this.http.get<any>(baseurl + '/depense/findbyid/'+id).toPromise();
  }
  async getDepenseCategories(): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/depense/categorie').toPromise();
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
  async getDepenses(): Promise<any[]> {
    try {
      const result = await this.http.get<any>(baseurl + '/depense').toPromise();
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
