import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {baseurl} from './routeconfig';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  userToken = window.localStorage.getItem('usertoken');

  login(user: any): Observable<any> {
    return this.http.post(baseurl+'/user/login', user);
  }

  constructor(private http: HttpClient, private router: Router) { }

  seeProfil(): any {
    if( this.userToken != null ){
      this.router.navigate(['/accueil']);
      window.localStorage.setItem('usertoken',this.userToken);
    } else {
      this.router.navigate(['/']);
    }
  }
  inscription(user: any):Observable<any> {
    return this.http.post(baseurl+'/user/inscription', user);
  }



}
