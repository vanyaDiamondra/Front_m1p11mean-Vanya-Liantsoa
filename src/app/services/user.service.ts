import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  userToken = window.localStorage.getItem('usertoken');
  baseurl = 'http://localhost:3000';


  login(user: any): Observable<any> {
    return this.http.post(this.baseurl+'/user/login', user);
  }

  constructor(private http: HttpClient, private router: Router) { }

  seeProfil(): any {
    if( this.userToken != null ){
      this.router.navigate(['/accueil']);
    } else {
      this.router.navigate(['/']);
    }
  }

}
