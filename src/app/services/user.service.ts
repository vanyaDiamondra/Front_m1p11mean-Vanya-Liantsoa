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

  seeProfil(token: string | null): Promise<any[]> {
    return this.http.get<any[]>(baseurl + '/token?token='+token).toPromise();
  }
  inscription(user: any):Observable<any> {
    return this.http.post(baseurl+'/user/inscription', user);
  }



}
