import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {baseurl} from './routeconfig';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  login(user: any): Observable<any> {
    return this.http.post(baseurl+'/user/login', user);
  }

  constructor(private http: HttpClient, private router: Router) { }

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


  async seeProfil(token: string | null): Promise<any[]> {
    const result = await this.http.get<any[]>(baseurl + '/token?token='+token).toPromise();
    if (result !== undefined) {
      return result;
    }
    return [];
  }

  inscription(user: any):Observable<any> {
    return this.http.post(baseurl+'/user/inscription', user);
  }
  getUserInfo():Promise<any> {
    const token = window.localStorage.getItem('tokenuser');
    return this.http.get<any>(baseurl + '/user/info?token='+token).toPromise();
  }

  updateUserInfo(data :any) :Observable<any> {
    return this.http.post(baseurl+'/user/updateprofil', data);
  }

  updatePic(data :any) :Observable<any> {
    return this.http.post(baseurl+'/user/updatepic', data);
  }




}
